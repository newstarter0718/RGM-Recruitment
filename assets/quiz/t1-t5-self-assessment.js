(function () {
  const data = window.RGM_SELF_ASSESSMENT_DATA;
  const root = document.getElementById("assessment-app");
  const overviewNode = document.getElementById("assessment-overview");
  const stagesNode = document.getElementById("assessment-stages");

  if (!data || !root || !overviewNode || !stagesNode) return;

  const UI = {
    en: {
      pageTitle: "T1-T5 Self-Assessment | RGM Recruitment Pack Playbook | Web Edition",
      sideTitle: "T1-T5 Self-Assessment",
      sideCopy: "Use the original certification question bank and stage criteria to assess current readiness after reading the playbook.",
      backToOverview: "Back to overview",
      navStage1: "Stage 1 Foundation",
      navStage2: "Stage 2 Market Diagnosis",
      navStage3: "Stage 3 Pack Design",
      navStage4: "Stage 4 Commercialization",
      navStage5: "Stage 5 Certification Readiness",
      heroEyebrow: "Interactive Assessment",
      heroTitle: "T1-T5 Self-Assessment",
      heroCopy: "After reading the full playbook, learners can use this page to test knowledge, rate confidence, practice scenario thinking, and understand where their current capability sits across each stage.",
      selfAssessment: "Self-Assessment",
      english: "English",
      chinese: "中文",
      learnerProfile: "Learner Profile",
      learnerName: "Learner name",
      market: "Market",
      role: "Role",
      learnerNamePlaceholder: "Enter learner name",
      marketPlaceholder: "Enter market or business unit",
      rolePlaceholder: "Enter role or certification target",
      certificationDashboard: "Certification Dashboard",
      questionBankNote: "The original certification question bank remains in English. Guidance, structure, and dashboard labels can be switched between English and Chinese.",
      stagesScored: "Stages scored",
      averageReadiness: "Average readiness",
      strongestStage: "Strongest stage",
      topReviewPriority: "Top review priority",
      overallCredential: "Current credential readiness",
      profileStatus: "Profile status",
      dashboardSummary: "This dashboard combines objective score and self-rating to create a stage-by-stage readiness view after the playbook is completed.",
      stageColumn: "Stage",
      readinessColumn: "Readiness",
      statusColumn: "Status",
      objectiveColumn: "Objective",
      reflectionColumn: "Self-rating",
      completionColumn: "Completion",
      actionColumn: "Action",
      passMarkLabel: "Pass mark",
      openStage: "Open",
      notScored: "Not scored",
      notStarted: "Not started",
      ready: "Ready",
      almostThere: "Almost there",
      needsReview: "Needs review",
      knowledgeCheck: "Knowledge Check",
      selfEvaluation: "Self-Evaluation",
      selfEvaluationCopy: "Rate your current confidence from 1 to 5. These responses inform the readiness view, but they do not replace the objective score.",
      sourceMaterial: "Source material",
      originalEnglishQuestions: "Original English question bank",
      question: "Question",
      correct: "Correct",
      correctAnswer: "Correct answer",
      noScoreYet: 'No score yet. Complete the stage and click "Score this stage" to generate your dashboard view.',
      readinessIndex: "Readiness index",
      objectiveScore: "Objective score",
      selfRatingScore: "Self-rating score",
      currentStatus: "Current status",
      completionRate: "Completion rate",
      scenarioPractice: "Scenario Practice",
      yourNotes: "Your notes",
      notesPlaceholder: "Write your own reasoning before opening the model answer.",
      showModelAnswer: "Show model answer",
      hideModelAnswer: "Hide model answer",
      panelChallengePrompts: "Panel Challenge Prompts",
      certificationScenario: "Certification Scenario",
      yourTask: "Your task",
      certificationComponent: "Certification Component",
      weight: "Weight",
      backTraining: "Back to Training Programme T1-T5",
      openBank: "Open Assessment Question Bank",
      returnHome: "Return Home",
      profileComplete: "Profile complete",
      profileMissing: "Profile not filled",
      foundationReady: "Foundation ready",
      practitionerReady: "Practitioner ready",
      deploymentReady: "Deployment ready",
      certificationReady: "Certification ready",
      inProgress: "In progress",
      resultReady: "You are operating at or above the expected level for this stage. Move forward or use the scenario section to deepen judgment.",
      resultAlmost: "You are close, but there are still a few concepts or decision patterns that need reinforcement before moving ahead.",
      resultNeeds: "This stage needs a focused review. Revisit the source chapter, then rescore the assessment.",
      resultEmpty: "Complete the stage and score it to see your readiness.",
      scoreStage: "Score this stage",
      resetStage: "Reset stage",
      questionsLabel: "Questions",
      reflectionsLabel: "Reflection prompts",
      scoredOn: "Last scored",
      readinessDashboard: "Readiness Dashboard",
      completionHint: "Objective questions count unanswered items as incorrect when a stage is scored.",
      caseBrief: "Case brief",
      challengePromptsCopy: "Use these prompts to rehearse how you will defend your recommendation in a certification panel.",
      learnerSnapshot: "Learner snapshot",
      profilePrompt: "Add learner details so this page can also work as an individual practice record.",
      answeredOf: "Answered",
    },
    zh: {
      pageTitle: "T1-T5 自我評估 | RGM Recruitment Pack Playbook | 網頁版",
      sideTitle: "T1-T5 自我評估",
      sideCopy: "讀完整份 playbook 後，可依照原始認證題庫與各階段標準檢查自己目前的能力成熟度。",
      backToOverview: "返回總覽",
      navStage1: "第一階段 基礎知識",
      navStage2: "第二階段 市場診斷",
      navStage3: "第三階段 包裝設計",
      navStage4: "第四階段 商業化執行",
      navStage5: "第五階段 認證準備",
      heroEyebrow: "互動評估",
      heroTitle: "T1-T5 自我評估",
      heroCopy: "學員讀完整份 playbook 後，可以在這裡進行知識測驗、信心自評與情境思考練習，快速了解自己在五個階段的能力落點。",
      selfAssessment: "自我評估",
      english: "English",
      chinese: "中文",
      learnerProfile: "學員資料",
      learnerName: "學員姓名",
      market: "市場 / 單位",
      role: "職務 / 認證目標",
      learnerNamePlaceholder: "輸入學員姓名",
      marketPlaceholder: "輸入市場、國家或事業單位",
      rolePlaceholder: "輸入職務或認證目標",
      certificationDashboard: "認證儀表板",
      questionBankNote: "原始認證題庫保留英文題幹，以維持內容忠實度；導覽說明、架構與結果儀表板可切換中英文。",
      stagesScored: "已評分階段",
      averageReadiness: "平均成熟度",
      strongestStage: "最強階段",
      topReviewPriority: "優先補強",
      overallCredential: "整體認證準備度",
      profileStatus: "資料完成度",
      dashboardSummary: "這個儀表板會結合客觀題成績與自評分數，形成五個階段的整體 readiness 視圖。",
      stageColumn: "階段",
      readinessColumn: "成熟度",
      statusColumn: "狀態",
      objectiveColumn: "客觀題",
      reflectionColumn: "自評",
      completionColumn: "完成度",
      actionColumn: "操作",
      passMarkLabel: "通過門檻",
      openStage: "開啟",
      notScored: "尚未評分",
      notStarted: "尚未開始",
      ready: "已達標",
      almostThere: "接近達標",
      needsReview: "需要複習",
      knowledgeCheck: "知識測驗",
      selfEvaluation: "自我評估",
      selfEvaluationCopy: "請以 1 到 5 分評估自己目前的信心程度。這些回覆會影響 readiness 視圖，但不會取代客觀題分數。",
      sourceMaterial: "對應教材",
      originalEnglishQuestions: "原始英文題庫",
      question: "題目",
      correct: "正確",
      correctAnswer: "正確答案",
      noScoreYet: "尚未產生評分。完成本階段後按下「評分本階段」，即可看到能力儀表板。",
      readinessIndex: "成熟度指數",
      objectiveScore: "客觀題分數",
      selfRatingScore: "自評分數",
      currentStatus: "目前狀態",
      completionRate: "完成度",
      scenarioPractice: "情境練習",
      yourNotes: "你的筆記",
      notesPlaceholder: "先寫下自己的判斷，再展開參考答案。",
      showModelAnswer: "顯示參考答案",
      hideModelAnswer: "隱藏參考答案",
      panelChallengePrompts: "面試官挑戰題",
      certificationScenario: "認證情境",
      yourTask: "你的任務",
      certificationComponent: "認證構面",
      weight: "權重",
      backTraining: "返回 T1-T5 培訓計畫",
      openBank: "開啟 Assessment Question Bank",
      returnHome: "返回首頁",
      profileComplete: "資料已完成",
      profileMissing: "資料未完整",
      foundationReady: "具備基礎能力",
      practitionerReady: "具備實務能力",
      deploymentReady: "具備落地能力",
      certificationReady: "已接近認證水準",
      inProgress: "持續進行中",
      resultReady: "你目前已達到或高於本階段預期水準，可以往下個階段前進，或利用情境題再強化判斷。",
      resultAlmost: "你已接近達標，但仍有幾個關鍵概念或決策邏輯需要補強。",
      resultNeeds: "這個階段建議重新回看教材重點，再重新評分一次。",
      resultEmpty: "完成本階段並評分後，這裡會顯示你的 readiness 結果。",
      scoreStage: "評分本階段",
      resetStage: "重設本階段",
      questionsLabel: "題數",
      reflectionsLabel: "自評題數",
      scoredOn: "上次評分",
      readinessDashboard: "能力儀表板",
      completionHint: "評分時，未作答的客觀題會以答錯計算，避免高估準備度。",
      caseBrief: "案例簡述",
      challengePromptsCopy: "可用以下題目練習如何在認證 panel 中 defend 你的建議。",
      learnerSnapshot: "學員快照",
      profilePrompt: "填入學員資料後，這一頁也能作為個人的練習紀錄頁。",
      answeredOf: "已作答",
    },
  };

  const emptyState = {
    answers: {},
    reflections: {},
    notes: {},
    results: {},
    profile: { name: "", market: "", role: "" },
    locale: "en",
  };

  let state = loadState();

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function loadState() {
    try {
      const raw = window.localStorage.getItem(data.storageKey);
      if (!raw) return clone(emptyState);
      const parsed = JSON.parse(raw);
      return {
        ...clone(emptyState),
        ...parsed,
        answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {},
        reflections: parsed.reflections && typeof parsed.reflections === "object" ? parsed.reflections : {},
        notes: parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {},
        results: parsed.results && typeof parsed.results === "object" ? parsed.results : {},
        profile: {
          ...emptyState.profile,
          ...(parsed.profile && typeof parsed.profile === "object" ? parsed.profile : {}),
        },
        locale: parsed.locale === "zh" ? "zh" : "en",
      };
    } catch {
      return clone(emptyState);
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(data.storageKey, JSON.stringify(state));
    } catch {
      // Ignore local storage failures so the assessment still works.
    }
  }

  function lang() {
    return state.locale === "zh" ? "zh" : "en";
  }

  function t(key) {
    return UI[lang()][key] || UI.en[key] || key;
  }

  function escapeHtml(value) {
    return String(value ?? "")
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
      resultFlag: state.results[stageId],
    };
  }

  const STAGE_ZH = {
    "stage-1": {
      label: "第一階段",
      title: "基礎知識",
      audience: "Associate / Analyst",
      duration: "45 分鐘",
      description: "聚焦 Recruitment 與 Affordability Pack 的基本語言、核心框架邏輯，以及啟動前不可妥協的原則。",
      reflections: [
        "我可以清楚說明 Recruitment、Affordability、Entry 與 Frequency Pack 的差異。",
        "我理解 DDI、Magic Price Point 與 Affordability Index 三者之間的關係。",
        "我可以解釋 6-Dimension Evaluation Framework 與 blocking factor 的作用。",
        "我知道為什麼 execution readiness 和 pack design 一樣重要。",
      ],
    },
    "stage-2": {
      label: "第二階段",
      title: "市場診斷與分析",
      audience: "Manager / Senior Analyst",
      duration: "30 分鐘測驗 + 45 分鐘書面分析",
      description: "檢查學員是否能先做正確診斷，而不是過早跳到 pack solution。",
      reflections: [
        "我可以根據證據區分 Brand Problem、Price Problem、Pack Problem 與 Execution Problem。",
        "我可以獨立計算並解讀 Affordability Index。",
        "我可以說明 price-pack ladder 的白地在哪裡，以及它為什麼重要。",
        "我知道何時正確答案應該是「不要用 pack 解決」。",
      ],
      scenario: {
        prompt: "市場 X：Category penetration 52%，Brand penetration 44%，目前 entry pack 為 PET 330ml、售價 USD 0.45，當地 DDI 每日 USD 8，IC 飲料 Magic Price Point 為 USD 0.25，競品 250ml 售價 USD 0.25，lapsed buyer rate 上升 12%，brand equity 穩定。請先寫下你的診斷，再展開參考答案。",
        guidance: [
          "先算出 Affordability Index。",
          "判斷主要問題類型。",
          "說明是否需要 pack intervention，以及理由。",
        ],
        modelAnswer: "Affordability Index = 0.45 / 0.25 x 100 = 180，代表明顯 affordability stress。由於 brand equity 穩定，brand penetration gap 也不是主要問題，因此更可能是 Price Problem。因為目前 entry price 明顯高於 Magic Price Point，且競品已在 entry threshold 上搶占機會，所以 pack intervention 是合理的。",
      },
    },
    "stage-3": {
      label: "第三階段",
      title: "包裝設計與商業個案",
      audience: "Senior Manager",
      duration: "Pack selection + business case build",
      description: "檢視學員是否能把 diagnosis 轉成合理的 pack recommendation，並建立站得住腳的商業個案。",
      reflections: [
        "我可以用 reach、trial、repeat 與 economics 建出 business case，而不是只用 top-down 假設。",
        "我可以解釋為什麼一個消費者很喜歡的 pack，仍可能在 Economic Fit 或 Operational Fit 失敗。",
        "我可以 defend 為什麼從 EPP 出發設計，比直接折現既有包裝更合理。",
        "我可以用 6-Dimension framework 說清楚 recommendation，同時維持商業敘事。",
      ],
      scenario: {
        prompt: "在替自己評分前，先寫下短答：如果你的推薦包裝有很強的 Consumer Fit，但 GP percent 偏弱，在送審前你會先調整哪些設計槓桿？",
        guidance: [
          "思考 format 或 size 的重新設計。",
          "重新檢查目標 EPP 與系統經濟模型。",
          "考慮 value-chain cost、customer economics 與 channel deployment。",
        ],
        modelAnswer: "正確做法是先 redesign，而不是例外核准。常見槓桿包括重新調整 pack size、format 或 material cost，重估 customer economics，或優化 channel strategy，讓目標 EPP 能成立，同時不破壞最低 GP percent 門檻。",
      },
    },
    "stage-4": {
      label: "第四階段",
      title: "商業化與執行",
      audience: "RGM Lead",
      duration: "Launch plan + 90-day plan",
      description: "評估學員能否把一個好 pack 變成真正可在市場運作的 launch。",
      reflections: [
        "我可以判斷 launch issue 應歸類為 Scale、Fix 還是 Exit。",
        "我可以解釋為什麼 EPP compliance 與 replenishment 是商業機制，而不只是營運細節。",
        "我可以建立一個同時涵蓋 leading、mid-term 與 lagging KPI 的 90 天視圖。",
        "我可以把策略 deck 轉成 outlet-level execution requirement。",
      ],
      scenario: {
        prompt: "想像你的第一個 30 天 review cadence。如果 ND 低於目標，但 trial 與 repeat 都不錯，你會先問哪一個 operational question？",
        guidance: [
          "找具體 failure mode，而不是泛泛而談。",
          "釐清問題是在 outlet type、distributor、region 還是 RTM。",
          "定義 fix owner 與修正時限。",
        ],
        modelAnswer: "第一個問題應該是先鎖定 ND gap 的精確來源：到底是哪一些 priority outlet 或 territory 缺貨或未鋪貨、原因是什麼。這樣問題才可診斷、可修正，而不會把原本健康的 launch 變成模糊的績效爭論。",
      },
    },
    "stage-5": {
      label: "第五階段",
      title: "認證準備度",
      audience: "All levels (cumulative)",
      duration: "60 分鐘書面作答 + case 準備與 panel defense",
      description: "依 Stage 5 case brief 與 composite scoring 建立的 readiness check，用來檢視 end-to-end capability，而不是單純 MCQ 分數。",
      reflections: [
        "我可以用 affordability、participation 與 competitive signal 診斷市場，不會太早跳到 solution。",
        "我可以把 diagnosis 轉成具備 EPP、format choice 與 6-Dimension 邏輯的 pack recommendation。",
        "我可以建立 Year 1 到 Year 3 的 business case，並說明 trial、cannibalization 與 NPV 等關鍵假設。",
        "我可以提出有清楚 KPI、stage gate 與 governance owner 的 90 天 launch plan。",
        "我可以面對 senior RGM 與 finance challenge 時，仍清楚 defend 自己的 recommendation。",
      ],
      caseBrief: {
        market: "孟加拉",
        context: "人口 1.7 億，人均 GDP 約 USD 2,800。都市雜貨通路 DDI 約為每天 BDT 400 到 600。食品通膨仍高，一般傳統通路約占 NARTD 銷量 90%，主要城市以外冷鏈受限。",
        category: "SSD category penetration 為 28%，brand penetration 為 19%。目前 entry pack 為 PET 250ml、售價 BDT 20。GT 通路 Magic Price Point 約為 BDT 10 到 15。當地競品 200ml 售價 BDT 12。Lapsed buyer rate 上升 18%。",
        task: "請提出完整的 Recruitment Pack proposal，涵蓋市場診斷、pack recommendation、business case、launch plan 與 governance，並準備 10 到 15 分鐘簡報與 panel challenge defense。",
      },
      challengeQuestions: [
        "你的 trial rate 假設有什麼證據支持？",
        "如果當地競品仍然更便宜，你打算如何取勝？",
        "若 Year 1 trade investment 很重，但 NPV 之後才轉正，你要如何向 finance 解釋？",
        "你的 Exit trigger 是什麼？若真的要退出，你會如何向客戶說明？",
      ],
    },
  };

  function stageView(stage) {
    if (lang() !== "zh" || !STAGE_ZH[stage.id]) return stage;
    const translated = STAGE_ZH[stage.id];
    return {
      ...stage,
      ...translated,
      scenario: translated.scenario || stage.scenario,
      caseBrief: translated.caseBrief || stage.caseBrief,
      challengeQuestions: translated.challengeQuestions || stage.challengeQuestions,
    };
  }

  function displayDate(value) {
    if (!value) return "—";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return "—";
    return parsed.toLocaleString(lang() === "zh" ? "zh-TW" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function percent(value) {
    if (value == null || Number.isNaN(value)) return "—";
    return `${Math.round(value)}%`;
  }

  function bandLabel(band) {
    return {
      Ready: t("ready"),
      "Almost there": t("almostThere"),
      "Needs review": t("needsReview"),
      "Not started": t("notStarted"),
    }[band] || band;
  }

  function bandClass(band) {
    return String(band || "not-started").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  function answeredReflectionCount(stage, reflections) {
    return stage.reflections.reduce((count, _prompt, index) => (
      reflections[`r${index}`] ? count + 1 : count
    ), 0);
  }

  function computeStageResult(stage) {
    const current = stageState(stage.id);
    const answers = current.answers;
    const reflections = current.reflections;

    const objectiveTotal = stage.objectiveQuestions.length;
    const objectiveAnswered = stage.objectiveQuestions.reduce((count, question) => (
      answers[question.id] ? count + 1 : count
    ), 0);
    const objectiveCorrect = stage.objectiveQuestions.reduce((count, question) => (
      answers[question.id] === question.answer ? count + 1 : count
    ), 0);
    const objectivePercent = objectiveTotal ? (objectiveCorrect / objectiveTotal) * 100 : null;

    const reflectionValues = stage.reflections
      .map((_prompt, index) => Number(reflections[`r${index}`]))
      .filter((value) => value >= 1 && value <= 5);
    const reflectionCount = reflectionValues.length;
    const reflectionAverage = reflectionCount
      ? reflectionValues.reduce((sum, value) => sum + value, 0) / reflectionCount
      : null;
    const reflectionPercent = reflectionAverage == null ? null : reflectionAverage * 20;

    if (!objectiveAnswered && !reflectionCount) return null;

    let readinessIndex = null;
    if (objectivePercent != null && reflectionPercent != null) {
      readinessIndex = objectivePercent * 0.75 + reflectionPercent * 0.25;
    } else if (objectivePercent != null) {
      readinessIndex = objectivePercent;
    } else if (reflectionPercent != null) {
      readinessIndex = reflectionPercent;
    }

    const completionBase = objectiveTotal + stage.reflections.length;
    const completionRate = completionBase ? ((objectiveAnswered + reflectionCount) / completionBase) * 100 : 0;

    let band = "Not started";
    if (readinessIndex != null) {
      if (readinessIndex >= stage.passMark) {
        band = "Ready";
      } else if (readinessIndex >= Math.max(stage.passMark - 10, 60)) {
        band = "Almost there";
      } else {
        band = "Needs review";
      }
    }

    return {
      objectiveCorrect,
      objectiveTotal,
      objectiveAnswered,
      objectivePercent,
      reflectionAverage,
      reflectionPercent,
      reflectionCount,
      readinessIndex,
      completionRate,
      band,
      passMark: stage.passMark,
    };
  }

  function stageResult(stage) {
    const raw = state.results[stage.id];
    if (!raw) return null;
    const fresh = computeStageResult(stage);
    if (!fresh) return null;
    return { ...fresh, scoredAt: raw.scoredAt };
  }

  function allStageResults() {
    return data.stages
      .map((stage) => ({ stage, result: stageResult(stage) }))
      .filter((entry) => entry.result);
  }

  function profileComplete() {
    return Boolean(
      state.profile.name.trim() &&
      state.profile.market.trim() &&
      state.profile.role.trim()
    );
  }

  function credentialLabel(results) {
    if (!results.length) return t("inProgress");
    const average = results.reduce((sum, entry) => sum + entry.result.readinessIndex, 0) / results.length;
    const readyCount = results.filter((entry) => entry.result.band === "Ready").length;
    const stageFiveReady = results.find((entry) => entry.stage.id === "stage-5")?.result.band === "Ready";

    if (results.length === data.stages.length && readyCount >= 4 && stageFiveReady && average >= 75) {
      return t("certificationReady");
    }
    if (results.length >= 4 && average >= 70) return t("deploymentReady");
    if (results.length >= 3 && average >= 62) return t("practitionerReady");
    if (results.length >= 1 && average >= 50) return t("foundationReady");
    return t("inProgress");
  }

  function resultHint(band) {
    if (band === "Ready") return t("resultReady");
    if (band === "Almost there") return t("resultAlmost");
    if (band === "Needs review") return t("resultNeeds");
    return t("resultEmpty");
  }

  function strongestStage(results) {
    if (!results.length) return t("notScored");
    const strongest = results.slice().sort((a, b) => b.result.readinessIndex - a.result.readinessIndex)[0];
    return stageView(strongest.stage).title;
  }

  function reviewPriority(results) {
    if (results.length !== data.stages.length) {
      const missing = data.stages.find((stage) => !state.results[stage.id]);
      return missing ? stageView(missing).title : t("notStarted");
    }
    const weakest = results.slice().sort((a, b) => a.result.readinessIndex - b.result.readinessIndex)[0];
    return stageView(weakest.stage).title;
  }

  function objectiveSummary(result) {
    if (!result || result.objectiveTotal === 0) return "—";
    return `${result.objectiveCorrect}/${result.objectiveTotal} · ${percent(result.objectivePercent)}`;
  }

  function reflectionSummary(result) {
    if (!result || result.reflectionAverage == null) return "—";
    return `${result.reflectionAverage.toFixed(1)}/5 · ${percent(result.reflectionPercent)}`;
  }

  function renderOverview() {
    const results = allStageResults();
    const average = results.length
      ? results.reduce((sum, entry) => sum + entry.result.readinessIndex, 0) / results.length
      : null;
    const learnerStatus = profileComplete() ? t("profileComplete") : t("profileMissing");

    const stats = [
      { label: t("stagesScored"), value: `${results.length}/${data.stages.length}` },
      { label: t("averageReadiness"), value: results.length ? percent(average) : t("notScored") },
      { label: t("strongestStage"), value: strongestStage(results) },
      { label: t("topReviewPriority"), value: reviewPriority(results) },
      { label: t("overallCredential"), value: credentialLabel(results) },
      { label: t("profileStatus"), value: learnerStatus },
    ];

    overviewNode.innerHTML = `
      <section class="assessment-intro reveal">
        <div class="assessment-toolbar">
          <div>
            <p class="eyebrow">${escapeHtml(t("selfAssessment"))}</p>
            <h2>${escapeHtml(t("readinessDashboard"))}</h2>
            <p>${escapeHtml(t("dashboardSummary"))}</p>
          </div>
          <div class="locale-toggle" role="group" aria-label="Language toggle">
            <button class="locale-btn ${lang() === "en" ? "is-active" : ""}" type="button" data-locale="en">${escapeHtml(t("english"))}</button>
            <button class="locale-btn ${lang() === "zh" ? "is-active" : ""}" type="button" data-locale="zh">${escapeHtml(t("chinese"))}</button>
          </div>
        </div>
        <div class="assessment-summary-grid">
          ${stats.map((item) => `
            <div class="summary-stat">
              <span>${escapeHtml(item.label)}</span>
              <strong>${escapeHtml(item.value)}</strong>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="assessment-dashboard reveal">
        <div class="assessment-dashboard-head">
          <div>
            <p class="eyebrow">${escapeHtml(t("learnerSnapshot"))}</p>
            <h3>${escapeHtml(t("certificationDashboard"))}</h3>
            <p class="body-copy">${escapeHtml(t("profilePrompt"))}</p>
          </div>
          <p class="assessment-note">${escapeHtml(t("questionBankNote"))}</p>
        </div>

        <div class="profile-form" aria-label="${escapeHtml(t("learnerProfile"))}">
          <label class="profile-field">
            <span>${escapeHtml(t("learnerName"))}</span>
            <input type="text" data-profile-field="name" value="${escapeHtml(state.profile.name)}" placeholder="${escapeHtml(t("learnerNamePlaceholder"))}" />
          </label>
          <label class="profile-field">
            <span>${escapeHtml(t("market"))}</span>
            <input type="text" data-profile-field="market" value="${escapeHtml(state.profile.market)}" placeholder="${escapeHtml(t("marketPlaceholder"))}" />
          </label>
          <label class="profile-field">
            <span>${escapeHtml(t("role"))}</span>
            <input type="text" data-profile-field="role" value="${escapeHtml(state.profile.role)}" placeholder="${escapeHtml(t("rolePlaceholder"))}" />
          </label>
        </div>

        <p class="assessment-inline-note">${escapeHtml(t("completionHint"))}</p>

        <div class="dashboard-table-shell">
          <table class="dashboard-table">
            <thead>
              <tr>
                <th>${escapeHtml(t("stageColumn"))}</th>
                <th>${escapeHtml(t("readinessColumn"))}</th>
                <th>${escapeHtml(t("statusColumn"))}</th>
                <th>${escapeHtml(t("objectiveColumn"))}</th>
                <th>${escapeHtml(t("reflectionColumn"))}</th>
                <th>${escapeHtml(t("completionColumn"))}</th>
                <th>${escapeHtml(t("actionColumn"))}</th>
              </tr>
            </thead>
            <tbody>
              ${data.stages.map((stage) => {
                const view = stageView(stage);
                const result = stageResult(stage);
                const readinessValue = result ? Math.max(0, Math.min(100, result.readinessIndex)) : 0;
                return `
                  <tr>
                    <td>
                      <strong>${escapeHtml(view.label)}</strong>
                      <div>${escapeHtml(view.title)}</div>
                    </td>
                    <td>
                      <div class="dashboard-bar">
                        <span class="dashboard-fill" style="width:${readinessValue}%"></span>
                      </div>
                      <span class="dashboard-score">${result ? percent(result.readinessIndex) : escapeHtml(t("notScored"))}</span>
                    </td>
                    <td><span class="status-pill ${bandClass(result ? result.band : "Not started")}">${escapeHtml(result ? bandLabel(result.band) : t("notStarted"))}</span></td>
                    <td>${escapeHtml(objectiveSummary(result))}</td>
                    <td>${escapeHtml(reflectionSummary(result))}</td>
                    <td>${result ? escapeHtml(percent(result.completionRate)) : "—"}</td>
                    <td><a class="assessment-open-link" href="#${escapeHtml(stage.id)}">${escapeHtml(t("openStage"))}</a></td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="assessment-card-grid">
        ${data.stages.map((stage) => {
          const view = stageView(stage);
          const result = stageResult(stage);
          return `
            <article class="assessment-card reveal">
              <p class="assessment-card-stage">${escapeHtml(view.label)}</p>
              <h3>${escapeHtml(view.title)}</h3>
              <p>${escapeHtml(view.description)}</p>
              <div class="assessment-card-meta">
                <span>${escapeHtml(view.audience)}</span>
                <span>${escapeHtml(view.duration)}</span>
                <span>${escapeHtml(t("passMarkLabel"))}: ${escapeHtml(String(stage.passMark))}%</span>
              </div>
              <div class="assessment-card-meta">
                <span>${escapeHtml(t("questionsLabel"))}: ${escapeHtml(String(stage.objectiveQuestions.length))}</span>
                <span>${escapeHtml(t("reflectionsLabel"))}: ${escapeHtml(String(stage.reflections.length))}</span>
              </div>
              <div class="assessment-card-status">
                <div>
                  <small>${escapeHtml(t("currentStatus"))}</small>
                  <strong>${escapeHtml(result ? bandLabel(result.band) : t("notStarted"))}</strong>
                </div>
                <span class="status-pill ${bandClass(result ? result.band : "Not started")}">${escapeHtml(result ? percent(result.readinessIndex) : t("notScored"))}</span>
              </div>
              <a class="assessment-jump" href="#${escapeHtml(stage.id)}">${escapeHtml(t("openStage"))} →</a>
            </article>
          `;
        }).join("")}
      </section>
    `;
  }

  function questionMarkup(stage, question, index, result) {
    const current = stageState(stage.id);
    const selected = current.answers[question.id] || "";
    const scored = Boolean(result);
    const questionClass = scored ? (selected && selected === question.answer ? "is-correct" : "is-incorrect") : "";

    return `
      <article class="quiz-question ${questionClass}">
        <div class="quiz-question-head">
          <p class="quiz-question-number">${escapeHtml(t("question"))} ${index + 1}</p>
          <p class="quiz-source">${escapeHtml(question.source || "")}</p>
        </div>
        <h4>${escapeHtml(question.prompt)}</h4>
        <div class="quiz-options">
          ${Object.entries(question.options).map(([key, value]) => `
            <label class="quiz-option">
              <input type="radio" name="${escapeHtml(question.id)}" value="${escapeHtml(key)}" data-answer-stage="${escapeHtml(stage.id)}" data-question-id="${escapeHtml(question.id)}" ${selected === key ? "checked" : ""} />
              <strong>${escapeHtml(key)}.</strong> ${escapeHtml(value)}
              ${scored && key === question.answer ? `<span class="option-tag">${escapeHtml(t("correct"))}</span>` : ""}
            </label>
          `).join("")}
        </div>
        ${scored ? `
          <div class="quiz-explanation">
            <p><strong>${escapeHtml(t("correctAnswer"))}:</strong> ${escapeHtml(question.answer)}</p>
            <p>${escapeHtml(question.rationale)}</p>
          </div>
        ` : ""}
      </article>
    `;
  }

  function reflectionMarkup(stage) {
    const current = stageState(stage.id);
    const view = stageView(stage);
    return `
      <div class="reflection-shell">
        ${view.reflections.map((prompt, index) => {
          const key = `r${index}`;
          const selected = Number(current.reflections[key] || 0);
          return `
            <div class="reflection-row">
              <p>${escapeHtml(prompt)}</p>
              <div class="reflection-scale">
                ${[1, 2, 3, 4, 5].map((value) => `
                  <label class="reflection-choice">
                    <input type="radio" name="${escapeHtml(stage.id)}-${escapeHtml(key)}" value="${value}" data-reflection-stage="${escapeHtml(stage.id)}" data-reflection-id="${escapeHtml(key)}" ${selected === value ? "checked" : ""} />
                    <span>${value}</span>
                  </label>
                `).join("")}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function scenarioMarkup(stage) {
    const view = stageView(stage);
    const current = stageState(stage.id);

    if (stage.id === "stage-5") {
      return `
        <div class="scenario-panel">
          <h4>${escapeHtml(t("certificationScenario"))}</h4>
          <div class="field-card">
            <div class="field-label"><p>Market</p></div>
            <div class="field-value"><p>${escapeHtml(view.caseBrief.market)}</p></div>
          </div>
          <div class="field-card">
            <div class="field-label"><p>Context</p></div>
            <div class="field-value"><p>${escapeHtml(view.caseBrief.context)}</p></div>
          </div>
          <div class="field-card">
            <div class="field-label"><p>Category</p></div>
            <div class="field-value"><p>${escapeHtml(view.caseBrief.category)}</p></div>
          </div>
          <div class="field-card">
            <div class="field-label"><p>${escapeHtml(t("yourTask"))}</p></div>
            <div class="field-value"><p>${escapeHtml(view.caseBrief.task)}</p></div>
          </div>
          <div class="table-shell">
            <table class="data-table">
              <thead>
                <tr>
                  <th>${escapeHtml(t("certificationComponent"))}</th>
                  <th>${escapeHtml(t("weight"))}</th>
                </tr>
              </thead>
              <tbody>
                ${stage.weighting.map((row) => `
                  <tr>
                    <td>${escapeHtml(row.label)}</td>
                    <td>${escapeHtml(String(row.weight))}%</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
          <h4>${escapeHtml(t("panelChallengePrompts"))}</h4>
          <p class="body-copy">${escapeHtml(t("challengePromptsCopy"))}</p>
          <ul class="challenge-list">
            ${view.challengeQuestions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          <label class="scenario-note">
            <span>${escapeHtml(t("yourNotes"))}</span>
            <textarea data-stage-note="${escapeHtml(stage.id)}" placeholder="${escapeHtml(t("notesPlaceholder"))}">${escapeHtml(current.note)}</textarea>
          </label>
        </div>
      `;
    }

    if (!view.scenario) return "";

    return `
      <div class="scenario-panel">
        <h4>${escapeHtml(t("scenarioPractice"))}</h4>
        <p>${escapeHtml(view.scenario.prompt)}</p>
        <ul class="challenge-list">
          ${view.scenario.guidance.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
        <label class="scenario-note">
          <span>${escapeHtml(t("yourNotes"))}</span>
          <textarea data-stage-note="${escapeHtml(stage.id)}" placeholder="${escapeHtml(t("notesPlaceholder"))}">${escapeHtml(current.note)}</textarea>
        </label>
        <button class="action-btn action-secondary" type="button" data-model-toggle="${escapeHtml(stage.id)}">${escapeHtml(t("showModelAnswer"))}</button>
        <div class="model-answer" id="model-answer-${escapeHtml(stage.id)}" hidden>
          <p>${escapeHtml(view.scenario.modelAnswer)}</p>
        </div>
      </div>
    `;
  }

  function resultMarkup(stage, result) {
    if (!result) {
      return `<div class="result-panel"><p class="result-empty">${escapeHtml(t("noScoreYet"))}</p></div>`;
    }

    return `
      <div class="result-panel">
        <div class="result-grid">
          <div class="result-metric">
            <span>${escapeHtml(t("readinessIndex"))}</span>
            <strong>${escapeHtml(percent(result.readinessIndex))}</strong>
          </div>
          <div class="result-metric">
            <span>${escapeHtml(t("objectiveScore"))}</span>
            <strong>${escapeHtml(objectiveSummary(result))}</strong>
          </div>
          <div class="result-metric">
            <span>${escapeHtml(t("selfRatingScore"))}</span>
            <strong>${escapeHtml(reflectionSummary(result))}</strong>
          </div>
          <div class="result-metric">
            <span>${escapeHtml(t("completionRate"))}</span>
            <strong>${escapeHtml(percent(result.completionRate))}</strong>
          </div>
        </div>
        <div class="assessment-card-status">
          <div>
            <small>${escapeHtml(t("currentStatus"))}</small>
            <strong>${escapeHtml(bandLabel(result.band))}</strong>
          </div>
          <span class="status-pill ${bandClass(result.band)}">${escapeHtml(t("passMarkLabel"))}: ${escapeHtml(String(stage.passMark))}%</span>
        </div>
        <p class="result-copy">${escapeHtml(resultHint(result.band))}</p>
        ${result.scoredAt ? `<p class="quiz-source">${escapeHtml(t("scoredOn"))}: ${escapeHtml(displayDate(result.scoredAt))}</p>` : ""}
      </div>
    `;
  }

  function stageMarkup(stage) {
    const view = stageView(stage);
    const result = stageResult(stage);
    const current = stageState(stage.id);
    const objectiveAnswered = stage.objectiveQuestions.reduce((count, question) => (
      current.answers[question.id] ? count + 1 : count
    ), 0);
    const reflectionCount = answeredReflectionCount(stage, current.reflections);

    return `
      <section class="chapter assessment-stage reveal" id="${escapeHtml(stage.id)}">
        <div class="chapter-head assessment-stage-head">
          <p class="assessment-card-stage">${escapeHtml(view.label)}</p>
          <h2>${escapeHtml(view.title)}</h2>
          <p class="body-copy">${escapeHtml(view.description)}</p>
          <div class="assessment-stage-meta">
            <span>${escapeHtml(view.audience)}</span>
            <span>${escapeHtml(view.duration)}</span>
            <span>${escapeHtml(t("passMarkLabel"))}: ${escapeHtml(String(stage.passMark))}%</span>
            <span>${escapeHtml(t("questionsLabel"))}: ${escapeHtml(String(stage.objectiveQuestions.length))}</span>
            <span>${escapeHtml(t("reflectionsLabel"))}: ${escapeHtml(String(stage.reflections.length))}</span>
          </div>
        </div>

        ${stage.objectiveQuestions.length ? `
          <div class="quiz-block">
            <h3 class="section-title">${escapeHtml(t("knowledgeCheck"))}</h3>
            <p class="body-copy">${escapeHtml(t("originalEnglishQuestions"))}</p>
            <p class="quiz-source">${escapeHtml(t("answeredOf"))} ${objectiveAnswered}/${stage.objectiveQuestions.length}</p>
            ${stage.objectiveQuestions.map((question, index) => questionMarkup(stage, question, index, result)).join("")}
          </div>
        ` : ""}

        <div class="quiz-block">
          <h3 class="section-title">${escapeHtml(t("selfEvaluation"))}</h3>
          <p class="body-copy">${escapeHtml(t("selfEvaluationCopy"))}</p>
          <p class="quiz-source">${escapeHtml(t("answeredOf"))} ${reflectionCount}/${stage.reflections.length}</p>
          ${reflectionMarkup(stage)}
        </div>

        <div class="quiz-block">
          <h3 class="section-title">${escapeHtml(stage.id === "stage-5" ? t("caseBrief") : t("scenarioPractice"))}</h3>
          ${scenarioMarkup(stage)}
        </div>

        <div class="quiz-block">
          <h3 class="section-title">${escapeHtml(t("sourceMaterial"))}</h3>
          <div class="assessment-source-list">
            ${stage.sources.map((source) => `<span class="source-pill">${escapeHtml(source)}</span>`).join("")}
          </div>
        </div>

        <div class="assessment-actions">
          <button class="action-btn action-primary" type="button" data-score-stage="${escapeHtml(stage.id)}">${escapeHtml(t("scoreStage"))}</button>
          <button class="action-btn action-secondary" type="button" data-reset-stage="${escapeHtml(stage.id)}">${escapeHtml(t("resetStage"))}</button>
        </div>

        ${resultMarkup(stage, result)}
      </section>
    `;
  }

  function renderStages() {
    stagesNode.innerHTML = data.stages.map((stage) => stageMarkup(stage)).join("");
  }

  function updateStaticChrome() {
    document.title = t("pageTitle");
    document.documentElement.lang = lang() === "zh" ? "zh-Hant" : "en";

    const mapping = {
      "assessment-side-title": t("sideTitle"),
      "assessment-side-copy": t("sideCopy"),
      "assessment-back-link": t("backToOverview"),
      "assessment-nav-1": t("navStage1"),
      "assessment-nav-2": t("navStage2"),
      "assessment-nav-3": t("navStage3"),
      "assessment-nav-4": t("navStage4"),
      "assessment-nav-5": t("navStage5"),
      "assessment-hero-eyebrow": t("heroEyebrow"),
      "assessment-hero-title": t("heroTitle"),
      "assessment-hero-copy": t("heroCopy"),
      "assessment-footer-training": t("backTraining"),
      "assessment-footer-bank": t("openBank"),
      "assessment-footer-home": t("returnHome"),
    };

    Object.entries(mapping).forEach(([id, value]) => {
      const node = document.getElementById(id);
      if (node) node.textContent = value;
    });
  }

  function renderAll() {
    renderOverview();
    renderStages();
    updateStaticChrome();
    window.initRevealObserver?.(root);
  }

  function scoreStage(stageId) {
    const stage = data.stages.find((item) => item.id === stageId);
    if (!stage) return;
    const result = computeStageResult(stage);
    if (!result) return;
    state.results[stageId] = { scoredAt: new Date().toISOString() };
    saveState();
    renderAll();
  }

  function resetStage(stageId) {
    state.answers[stageId] = {};
    state.reflections[stageId] = {};
    state.notes[stageId] = "";
    state.results[stageId] = null;
    saveState();
    renderAll();
  }

  root.addEventListener("click", (event) => {
    const localeButton = event.target.closest("[data-locale]");
    if (localeButton) {
      state.locale = localeButton.dataset.locale === "zh" ? "zh" : "en";
      saveState();
      renderAll();
      return;
    }

    const scoreButton = event.target.closest("[data-score-stage]");
    if (scoreButton) {
      scoreStage(scoreButton.dataset.scoreStage);
      return;
    }

    const resetButton = event.target.closest("[data-reset-stage]");
    if (resetButton) {
      resetStage(resetButton.dataset.resetStage);
      return;
    }

    const modelToggle = event.target.closest("[data-model-toggle]");
    if (modelToggle) {
      const stageId = modelToggle.dataset.modelToggle;
      const panel = document.getElementById(`model-answer-${stageId}`);
      if (!panel) return;
      const willShow = panel.hasAttribute("hidden");
      if (willShow) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
      modelToggle.textContent = willShow ? t("hideModelAnswer") : t("showModelAnswer");
    }
  });

  root.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches("[data-answer-stage]")) {
      const stageId = target.dataset.answerStage;
      const questionId = target.dataset.questionId;
      if (!stageId || !questionId) return;
      stageState(stageId).answers[questionId] = target.value;
      saveState();
      if (state.results[stageId]) renderAll();
      return;
    }

    if (target.matches("[data-reflection-stage]")) {
      const stageId = target.dataset.reflectionStage;
      const reflectionId = target.dataset.reflectionId;
      if (!stageId || !reflectionId) return;
      stageState(stageId).reflections[reflectionId] = Number(target.value);
      saveState();
      if (state.results[stageId]) renderAll();
      return;
    }

    if (target.matches("[data-profile-field]")) {
      const field = target.dataset.profileField;
      if (!field) return;
      state.profile[field] = target.value;
      saveState();
      renderOverview();
      window.initRevealObserver?.(overviewNode);
    }
  });

  root.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches("[data-stage-note]")) {
      const stageId = target.dataset.stageNote;
      if (!stageId) return;
      state.notes[stageId] = target.value;
      saveState();
      return;
    }

    if (target.matches("[data-profile-field]")) {
      const field = target.dataset.profileField;
      if (!field) return;
      state.profile[field] = target.value;
      saveState();
    }
  });

  renderAll();

})();
