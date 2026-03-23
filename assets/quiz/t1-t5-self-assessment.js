(function () {
  const data = window.RGM_SELF_ASSESSMENT_DATA;
  const root = document.getElementById("assessment-app");
  if (!data || !root) return;

  const emptyState = { answers: {}, reflections: {}, notes: {}, results: {} };
  let state = loadState();

  function loadState() {
    try {
      const raw = window.localStorage.getItem(data.storageKey);
      return raw ? { ...emptyState, ...JSON.parse(raw) } : { ...emptyState };
    } catch {
      return { ...emptyState };
    }
  }

  function saveState() {
    window.localStorage.setItem(data.storageKey, JSON.stringify(state));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function stageState(stageId) {
    state.answers[stageId] ||= {};
    state.reflections[stageId] ||= {};
    state.notes[stageId] ||= "";
    state.results[stageId] ||= null;
    return {
      answers: state.answers[stageId],
      reflections: state.reflections[stageId],
      note: state.notes[stageId],
      result: state.results[stageId],
    };
  }

  function computeStageResult(stage) {
    const current = stageState(stage.id);
    const objectiveTotal = stage.objectiveQuestions.length;
    const objectiveAnswered = stage.objectiveQuestions.filter(
      (question) => current.answers[question.id]
    ).length;
    const objectiveCorrect = stage.objectiveQuestions.filter(
      (question) => current.answers[question.id] === question.answer
    ).length;
    const objectivePercent = objectiveTotal
      ? Math.round((objectiveCorrect / objectiveTotal) * 100)
      : null;

    const reflectionTotal = stage.reflections.length;
    const reflectionValues = stage.reflections
      .map((_, index) => Number(current.reflections["r" + index] || 0))
      .filter(Boolean);
    const reflectionAnswered = reflectionValues.length;
    const reflectionPercent = reflectionAnswered
      ? Math.round(
          (reflectionValues.reduce((sum, value) => sum + value, 0) /
            (reflectionAnswered * 5)) *
            100
        )
      : null;

    let blendedScore = null;
    if (objectivePercent !== null && reflectionPercent !== null) {
      blendedScore = Math.round(objectivePercent * 0.85 + reflectionPercent * 0.15);
    } else if (objectivePercent !== null) {
      blendedScore = objectivePercent;
    } else if (reflectionPercent !== null) {
      blendedScore = reflectionPercent;
    }

    let band = "Not started";
    if (blendedScore !== null) {
      if (blendedScore >= stage.passMark) {
        band = "Ready";
      } else if (blendedScore >= stage.passMark - 10) {
        band = "Almost there";
      } else {
        band = "Needs review";
      }
    }

    return {
      objectiveTotal,
      objectiveAnswered,
      objectiveCorrect,
      objectivePercent,
      reflectionTotal,
      reflectionAnswered,
      reflectionPercent,
      blendedScore,
      band,
      completed:
        (objectiveTotal === 0 || objectiveAnswered === objectiveTotal) &&
        (reflectionTotal === 0 || reflectionAnswered === reflectionTotal),
      scoredAt: new Date().toISOString(),
    };
  }

  function resultHint(stage, result) {
    if (result.blendedScore === null) {
      return "Complete the stage and score it to see your current readiness.";
    }
    if (result.blendedScore >= stage.passMark) {
      return "You are operating at or above the expected level for this stage. Move to the next stage or use the written scenario to deepen your judgment.";
    }
    if (result.blendedScore >= stage.passMark - 10) {
      return "You are close, but there are still a few concepts or decision patterns that need reinforcement before moving on.";
    }
    return "This stage needs a focused re-read. Review the linked source chapter and then retake the assessment.";
  }

  function renderOverview() {
    const container = document.getElementById("assessment-overview");
    if (!container) return;

    const stageSummaries = data.stages.map((stage) => {
      const result = state.results[stage.id];
      const scoreText =
        result && result.blendedScore !== null ? result.blendedScore + "%" : "Not scored";
      const band = result ? result.band : "Not started";
      return `
        <article class="assessment-card reveal">
          <p class="assessment-card-stage">${escapeHtml(stage.label)}</p>
          <h3>${escapeHtml(stage.title)}</h3>
          <p>${escapeHtml(stage.description)}</p>
          <div class="assessment-card-meta">
            <span>${escapeHtml(stage.audience)}</span>
            <span>Pass mark ${stage.passMark}%</span>
          </div>
          <div class="assessment-card-status">
            <strong>${escapeHtml(scoreText)}</strong>
            <span class="status-pill ${slugify(band)}">${escapeHtml(band)}</span>
          </div>
          <a class="assessment-jump" href="#${escapeHtml(stage.id)}">Open ${escapeHtml(
        stage.label
      )}</a>
        </article>
      `;
    });

    const scoredStages = Object.values(state.results).filter(
      (item) => item && item.blendedScore !== null
    );
    const averageScore = scoredStages.length
      ? Math.round(
          scoredStages.reduce((sum, item) => sum + item.blendedScore, 0) /
            scoredStages.length
        )
      : null;
    const strongest = data.stages
      .map((stage) => ({ stage, result: state.results[stage.id] }))
      .filter((entry) => entry.result && entry.result.blendedScore !== null)
      .sort((a, b) => b.result.blendedScore - a.result.blendedScore)[0];
    const weakest = data.stages
      .map((stage) => ({ stage, result: state.results[stage.id] }))
      .filter((entry) => entry.result && entry.result.blendedScore !== null)
      .sort((a, b) => a.result.blendedScore - b.result.blendedScore)[0];

    container.innerHTML = `
      <section class="assessment-intro reveal">
        <p class="eyebrow">Self-Assessment</p>
        <h2>${escapeHtml(data.title)}</h2>
        <p class="body-copy">${escapeHtml(data.subtitle)}</p>
        <div class="assessment-summary-grid">
          <div class="summary-stat">
            <strong>${scoredStages.length}/${data.stages.length}</strong>
            <span>Stages scored</span>
          </div>
          <div class="summary-stat">
            <strong>${averageScore !== null ? averageScore + "%" : "--"}</strong>
            <span>Average readiness</span>
          </div>
          <div class="summary-stat">
            <strong>${strongest ? escapeHtml(strongest.stage.label) : "--"}</strong>
            <span>Strongest stage</span>
          </div>
          <div class="summary-stat">
            <strong>${weakest ? escapeHtml(weakest.stage.label) : "--"}</strong>
            <span>Top review priority</span>
          </div>
        </div>
      </section>
      <section class="assessment-card-grid">
        ${stageSummaries.join("")}
      </section>
    `;

    window.initRevealObserver?.(container);
  }

  function slugify(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  function questionMarkup(stage, question, index) {
    const selected = stageState(stage.id).answers[question.id];
    const result = stageState(stage.id).result;
    const showReview = !!result;
    const reviewClass =
      showReview && selected
        ? selected === question.answer
          ? "is-correct"
          : "is-incorrect"
        : "";

    return `
      <article class="quiz-question ${reviewClass}">
        <div class="quiz-question-head">
          <p class="quiz-question-number">Question ${index + 1}</p>
          <span class="quiz-source">${escapeHtml(question.source)}</span>
        </div>
        <h4>${escapeHtml(question.prompt)}</h4>
        <div class="quiz-options">
          ${Object.entries(question.options)
            .map(([key, label]) => {
              const checked = selected === key ? "checked" : "";
              const correctTag =
                showReview && key === question.answer
                  ? '<span class="option-tag">Correct</span>'
                  : "";
              return `
                <label class="quiz-option">
                  <input
                    type="radio"
                    name="${stage.id}-${question.id}"
                    data-stage="${stage.id}"
                    data-kind="answer"
                    data-id="${question.id}"
                    value="${key}"
                    ${checked}
                  />
                  <span><strong>${key}.</strong> ${escapeHtml(label)} ${correctTag}</span>
                </label>
              `;
            })
            .join("")}
        </div>
        ${
          showReview
            ? `
              <div class="quiz-explanation">
                <p><strong>Correct answer:</strong> ${escapeHtml(question.answer)}</p>
                <p>${escapeHtml(question.rationale)}</p>
              </div>
            `
            : ""
        }
      </article>
    `;
  }

  function reflectionMarkup(stage) {
    const current = stageState(stage.id);
    return stage.reflections
      .map((statement, index) => {
        const reflectionId = "r" + index;
        const selected = current.reflections[reflectionId];
        return `
          <div class="reflection-row">
            <p>${escapeHtml(statement)}</p>
            <div class="reflection-scale">
              ${[1, 2, 3, 4, 5]
                .map((value) => {
                  const checked = Number(selected) === value ? "checked" : "";
                  return `
                    <label class="reflection-choice">
                      <input
                        type="radio"
                        name="${stage.id}-${reflectionId}"
                        data-stage="${stage.id}"
                        data-kind="reflection"
                        data-id="${reflectionId}"
                        value="${value}"
                        ${checked}
                      />
                      <span>${value}</span>
                    </label>
                  `;
                })
                .join("")}
            </div>
          </div>
        `;
      })
      .join("");
  }

  function resultMarkup(stage) {
    const result = stageState(stage.id).result;
    if (!result) {
      return `
        <div class="result-panel">
          <p class="result-empty">No score yet. Answer the stage, then click "Score this stage".</p>
        </div>
      `;
    }

    return `
      <div class="result-panel">
        <div class="result-grid">
          <div class="result-metric">
            <strong>${result.blendedScore !== null ? result.blendedScore + "%" : "--"}</strong>
            <span>Readiness index</span>
          </div>
          <div class="result-metric">
            <strong>${result.objectivePercent !== null ? result.objectivePercent + "%" : "--"}</strong>
            <span>Objective score</span>
          </div>
          <div class="result-metric">
            <strong>${result.reflectionPercent !== null ? result.reflectionPercent + "%" : "--"}</strong>
            <span>Self-rating score</span>
          </div>
          <div class="result-metric">
            <strong>${escapeHtml(result.band)}</strong>
            <span>Current status</span>
          </div>
        </div>
        <p class="result-copy">${escapeHtml(resultHint(stage, result))}</p>
      </div>
    `;
  }

  function stageMarkup(stage) {
    const current = stageState(stage.id);
    const hasObjective = stage.objectiveQuestions.length > 0;
    const casePanel = stage.caseBrief
      ? `
        <div class="note-card assessment-case">
          <p class="eyebrow">Certification Scenario</p>
          <h4>${escapeHtml(stage.caseBrief.market)}</h4>
          <p>${escapeHtml(stage.caseBrief.context)}</p>
          <p>${escapeHtml(stage.caseBrief.category)}</p>
          <p><strong>Your task:</strong> ${escapeHtml(stage.caseBrief.task)}</p>
        </div>
      `
      : "";

    const weightingPanel = stage.weighting
      ? `
        <div class="table-shell">
          <table class="data-table">
            <thead>
              <tr><th>Certification Component</th><th>Weight</th></tr>
            </thead>
            <tbody>
              ${stage.weighting
                .map(
                  (item) => `
                    <tr>
                      <td>${escapeHtml(item.label)}</td>
                      <td>${item.weight}%</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `
      : "";

    const challengePanel = stage.challengeQuestions
      ? `
        <div class="challenge-list">
          ${stage.challengeQuestions
            .map(
              (question) => `
                <article class="stack-item">
                  <p>${escapeHtml(question)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      `
      : "";

    const scenarioPanel = stage.scenario
      ? `
        <div class="scenario-panel">
          <h4>Scenario Practice</h4>
          <p>${escapeHtml(stage.scenario.prompt)}</p>
          <ul class="bullet-list">
            ${stage.scenario.guidance
              .map((line) => `<li>${escapeHtml(line)}</li>`)
              .join("")}
          </ul>
          <label class="scenario-note">
            <span>Your notes</span>
            <textarea
              data-stage="${stage.id}"
              data-kind="note"
              rows="6"
              placeholder="Write your own reasoning before checking the model answer."
            >${escapeHtml(current.note || "")}</textarea>
          </label>
          <button class="action-btn action-secondary" type="button" data-action="toggle-model" data-stage="${stage.id}">
            Show model answer
          </button>
          <div class="model-answer" id="model-${stage.id}" hidden>
            <p>${escapeHtml(stage.scenario.modelAnswer)}</p>
          </div>
        </div>
      `
      : "";

    return `
      <section class="chapter assessment-stage reveal" id="${escapeHtml(stage.id)}">
        <div class="chapter-head">
          <p class="eyebrow">${escapeHtml(stage.label)}</p>
          <h2>${escapeHtml(stage.title)}</h2>
        </div>
        <div class="assessment-stage-meta">
          <span>${escapeHtml(stage.audience)}</span>
          <span>${escapeHtml(stage.duration)}</span>
          <span>Pass mark ${stage.passMark}%</span>
        </div>
        <p class="body-copy">${escapeHtml(stage.description)}</p>
        <div class="assessment-source-list">
          ${stage.sources
            .map((item) => `<span class="source-pill">${escapeHtml(item)}</span>`)
            .join("")}
        </div>
        ${casePanel}
        ${weightingPanel}
        ${
          hasObjective
            ? `
              <div class="quiz-block">
                <h3 class="section-title">Knowledge Check</h3>
                ${stage.objectiveQuestions
                  .map((question, index) => questionMarkup(stage, question, index))
                  .join("")}
              </div>
            `
            : ""
        }
        <div class="quiz-block">
          <h3 class="section-title">Self-Evaluation</h3>
          <p class="body-copy">Rate your current confidence from 1 to 5. These responses shape your readiness view but do not override your objective score.</p>
          <div class="reflection-shell">
            ${reflectionMarkup(stage)}
          </div>
        </div>
        ${scenarioPanel}
        ${
          challengePanel
            ? `
              <div class="quiz-block">
                <h3 class="section-title">Panel Challenge Prompts</h3>
                ${challengePanel}
              </div>
            `
            : ""
        }
        <div class="assessment-actions">
          <button class="action-btn action-primary" type="button" data-action="score" data-stage="${stage.id}">
            Score this stage
          </button>
          <button class="action-btn action-secondary" type="button" data-action="reset" data-stage="${stage.id}">
            Reset stage
          </button>
        </div>
        <div id="result-${escapeHtml(stage.id)}">
          ${resultMarkup(stage)}
        </div>
      </section>
    `;
  }

  function renderStages() {
    const container = document.getElementById("assessment-stages");
    if (!container) return;
    container.innerHTML = data.stages.map(stageMarkup).join("");
    window.initRevealObserver?.(container);
  }

  function updateResult(stageId) {
    const stage = data.stages.find((item) => item.id === stageId);
    const container = document.getElementById("result-" + stageId);
    if (stage && container) {
      container.innerHTML = resultMarkup(stage);
    }
  }

  function scoreStage(stageId) {
    const stage = data.stages.find((item) => item.id === stageId);
    if (!stage) return;
    state.results[stageId] = computeStageResult(stage);
    saveState();
    renderStages();
    renderOverview();
  }

  function resetStage(stageId) {
    state.answers[stageId] = {};
    state.reflections[stageId] = {};
    state.notes[stageId] = "";
    state.results[stageId] = null;
    saveState();
    renderStages();
    renderOverview();
  }

  root.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) {
      return;
    }

    const stageId = target.dataset.stage;
    const kind = target.dataset.kind;
    const itemId = target.dataset.id;
    if (!stageId || !kind) return;

    if (kind === "answer" && target instanceof HTMLInputElement) {
      state.answers[stageId][itemId] = target.value;
    }

    if (kind === "reflection" && target instanceof HTMLInputElement) {
      state.reflections[stageId][itemId] = target.value;
    }

    if (kind === "note" && target instanceof HTMLTextAreaElement) {
      state.notes[stageId] = target.value;
    }

    saveState();
  });

  root.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLTextAreaElement)) return;
    if (target.dataset.kind !== "note" || !target.dataset.stage) return;
    state.notes[target.dataset.stage] = target.value;
    saveState();
  });

  root.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest("[data-action]");
    if (!button) return;

    const action = button.getAttribute("data-action");
    const stageId = button.getAttribute("data-stage");
    if (!stageId) return;

    if (action === "score") {
      scoreStage(stageId);
    }

    if (action === "reset") {
      resetStage(stageId);
    }

    if (action === "toggle-model") {
      const panel = document.getElementById("model-" + stageId);
      if (!panel) return;
      const hidden = panel.hasAttribute("hidden");
      if (hidden) {
        panel.removeAttribute("hidden");
        button.textContent = "Hide model answer";
      } else {
        panel.setAttribute("hidden", "");
        button.textContent = "Show model answer";
      }
    }
  });

  renderOverview();
  renderStages();
})();
