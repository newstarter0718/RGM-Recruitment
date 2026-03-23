const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

function initRevealObserver(root = document) {
  root.querySelectorAll('.reveal').forEach((el) => {
    if (el.dataset.revealBound === 'true') return;
    observer.observe(el);
    el.dataset.revealBound = 'true';
  });
}

window.initRevealObserver = initRevealObserver;
initRevealObserver();

function initHomeSearch() {
  const chapterSearch = document.getElementById('chapter-search');
  if (!chapterSearch) return;

  const cards = Array.from(document.querySelectorAll('.chapter-card-link'));
  const groups = Array.from(document.querySelectorAll('[data-card-group]'));

  chapterSearch.addEventListener('input', () => {
    const query = chapterSearch.value.trim().toLowerCase();

    cards.forEach((card) => {
      const haystack = (card.dataset.search || '').toLowerCase();
      const text = card.textContent.toLowerCase();
      const match = !query || haystack.includes(query) || text.includes(query);
      card.hidden = !match;
    });

    groups.forEach((group) => {
      const visibleCards = Array.from(group.querySelectorAll('.chapter-card-link')).some((card) => !card.hidden);
      group.hidden = !visibleCards;
    });
  });
}

function injectChapterExperience() {
  const article = document.querySelector('.chapter-article');
  const hero = document.querySelector('.chapter-hero');
  if (!article || !hero || document.getElementById('chapter-experience')) return;

  const page = window.location.pathname.split('/').pop() || '';

  const genericMap = {
    'chapter-0-introduction.html': {
      phase: 'Orientation',
      title: 'Use This Chapter As Your Working Brief',
      cards: [
        { label: 'Why It Matters', title: 'Shared language first', copy: 'This chapter sets the vocabulary, scope, and role-based reading path for the full pack workflow.' },
        { label: 'Look For', title: 'Definitions and map logic', copy: 'Focus on pack types, key definitions, and the navigation map before moving into the strategy chapters.' },
        { label: 'Best Use', title: 'Team onboarding', copy: 'Use it to align new team members before they join workshops, reviews, or certification work.' },
      ],
    },
    'chapter-1-strategic-foundation.html': {
      phase: 'Strategy',
      title: 'Understand The Logic Before The Tools',
      cards: [
        { label: 'Core Question', title: 'Why this pack exists', copy: 'This chapter anchors Recruitment and Affordability Packs inside broader RGM and OBPPC strategy.' },
        { label: 'Commercial Lens', title: 'Growth engine choices', copy: 'Read it as the bridge between consumer acquisition logic and portfolio role architecture.' },
        { label: 'Use With', title: 'Chapter 2 diagnosis', copy: 'Once the strategy is clear, move immediately into diagnosis so you do not solve the wrong problem.' },
      ],
    },
    'chapter-2-market-diagnosis.html': {
      phase: 'Diagnosis',
      title: 'This Is The Decision Gate Before Pack Design',
      cards: [
        { label: 'Core Question', title: 'Is this really a pack problem?', copy: 'Use the five-step diagnosis sequence before creating new packs or changing formats.' },
        { label: 'Commercial Lens', title: 'Affordability and participation', copy: 'The strongest reading path is DDI, penetration, price-pack ladder, channel context, and then go/no-go.' },
        { label: 'Use With', title: 'Decision tree visual', copy: 'Pair this chapter with the Go / No-Go figure to make the logic easier to explain cross-functionally.' },
      ],
    },
    'chapter-3-pack-design-framework.html': {
      phase: 'Design',
      title: 'Move From White Space To Defendable Pack Logic',
      cards: [
        { label: 'Core Question', title: 'Can the pack actually work?', copy: 'This chapter is about selecting the right format and proving that it passes consumer, operational, and economic gates.' },
        { label: 'Commercial Lens', title: 'EPP before format', copy: 'The website emphasizes the EPP-led design sequence so readers do not start from the wrong pack.' },
        { label: 'Use With', title: 'Stage 3 assessment', copy: 'This is the chapter most directly connected to the business-case and evaluation questions in the certification path.' },
      ],
    },
    'chapter-4-commercialization-blueprint.html': {
      phase: 'Execution',
      title: 'The Launch Mechanic Matters As Much As The Pack',
      cards: [
        { label: 'Core Question', title: 'Will it win in outlet reality?', copy: 'Use this chapter to translate pack logic into real sell-in, sell-out, price, POSM, and replenishment decisions.' },
        { label: 'Commercial Lens', title: 'Five non-negotiables', copy: 'Treat the launch as an operating system, not a one-time activation or sales push.' },
        { label: 'Use With', title: 'Closed-loop visual', copy: 'The sell-in to sell-out loop is the fastest way to communicate execution discipline to market teams.' },
      ],
    },
    'chapter-5-performance-measurement-optimization.html': {
      phase: 'Optimization',
      title: 'Measure Whether Recruitment Is Actually Working',
      cards: [
        { label: 'Core Question', title: 'What should be scaled, fixed, or exited?', copy: 'This chapter turns launch data into a structured management decision rather than a reactive discussion.' },
        { label: 'Commercial Lens', title: 'Three-horizon KPI design', copy: 'Separate leading, mid-term, and lagging indicators so teams do not confuse early execution with long-term success.' },
        { label: 'Use With', title: 'Scale / Fix / Exit reviews', copy: 'This is the chapter to bring into governance meetings and business-case follow-up discussions.' },
      ],
    },
    'chapter-6-case-library.html': {
      phase: 'Application',
      title: 'Use Cases To Convert Theory Into Market Judgment',
      cards: [
        { label: 'Core Question', title: 'How does this look in context?', copy: 'The case library helps readers see how pack logic changes across markets, channels, and affordability realities.' },
        { label: 'Commercial Lens', title: 'Pattern recognition', copy: 'Read these cases to compare what strong diagnosis and execution look like in real commercial settings.' },
        { label: 'Use With', title: 'Training workshops', copy: 'This page works best as discussion material once teams already know the framework language.' },
      ],
    },
    'chapter-7-governance-ways-of-working.html': {
      phase: 'Governance',
      title: 'Good Pack Decisions Need Good Decision Rights',
      cards: [
        { label: 'Core Question', title: 'Who decides what, and when?', copy: 'This chapter protects the system from slow approvals, weak accountability, and poor stage-gate discipline.' },
        { label: 'Commercial Lens', title: 'Cross-functional alignment', copy: 'It frames RGM, Finance, Supply Chain, Sales, and Marketing as one decision system rather than separate silos.' },
        { label: 'Use With', title: 'Leadership review meetings', copy: 'Bring this page into governance conversations whenever launch decisions drift or become unclear.' },
      ],
    },
    'chapter-8-tools-templates-appendix.html': {
      phase: 'Toolkit',
      title: 'Turn The Framework Into Practical Working Files',
      cards: [
        { label: 'Core Question', title: 'What do teams actually use?', copy: 'This chapter packages the templates and appendix tools that make the strategy executable in daily work.' },
        { label: 'Commercial Lens', title: 'Reference and repeatability', copy: 'It is the operational layer that keeps markets from rebuilding the same thinking from scratch each time.' },
        { label: 'Use With', title: 'Business-case preparation', copy: 'Pair this page with the design, execution, and governance chapters whenever teams build a real initiative.' },
      ],
    },
  };

  const specialMarkup = {
    'training-programme-t1-t5-five-stage-certification-programme.html': `
      <section class="chapter-experience reveal" id="chapter-experience">
        <div class="chapter-experience-head">
          <div>
            <p class="chapter-experience-phase">Capability Journey</p>
            <h3>T1-T5 Roadmap At A Glance</h3>
          </div>
          <p class="chapter-group-copy">Use this page as the bridge between reading the playbook and testing readiness through the formal question bank and self-assessment experience.</p>
        </div>
        <div class="chapter-roadmap">
          <div class="chapter-roadmap-grid">
            <article class="chapter-roadmap-card"><span>Stage 1</span><strong>Foundation</strong><p>Shared language, definitions, and core strategy logic.</p></article>
            <article class="chapter-roadmap-card"><span>Stage 2</span><strong>Diagnosis</strong><p>Affordability analysis, problem classification, and market evidence.</p></article>
            <article class="chapter-roadmap-card"><span>Stage 3</span><strong>Pack Design</strong><p>EPP-led pack decisions, 6-dimension scoring, and business cases.</p></article>
            <article class="chapter-roadmap-card"><span>Stage 4</span><strong>Execution</strong><p>Launch planning, KPI design, and scale/fix/exit control.</p></article>
            <article class="chapter-roadmap-card"><span>Stage 5</span><strong>Certification</strong><p>End-to-end case thinking, defense, and readiness under challenge.</p></article>
          </div>
          <div class="chapter-roadmap-links">
            <a class="action-btn action-primary" href="t1-t5-self-assessment.html">Open Self-Assessment</a>
            <a class="action-btn action-secondary" href="assessment-question-bank-full-bank-stages-1-5.html">Open Question Bank</a>
          </div>
        </div>
      </section>
    `,
    'assessment-question-bank-full-bank-stages-1-5.html': `
      <section class="chapter-experience reveal" id="chapter-experience">
        <div class="chapter-experience-head">
          <div>
            <p class="chapter-experience-phase">Assessment Library</p>
            <h3>Question Bank By Capability Level</h3>
          </div>
          <p class="chapter-group-copy">This page holds the original testing material. Use it as a reference library, then move into the live self-assessment page for actual readiness scoring.</p>
        </div>
        <div class="bank-overview-grid">
          <article class="bank-overview-card"><span>Stage 1</span><strong>Foundation</strong><p>Core language, frameworks, and pack-role fundamentals.</p></article>
          <article class="bank-overview-card"><span>Stage 2</span><strong>Diagnosis</strong><p>Affordability, ladder mapping, and problem classification.</p></article>
          <article class="bank-overview-card"><span>Stage 3</span><strong>Pack Design</strong><p>EPP logic, 6-dimension evaluation, and business-case thinking.</p></article>
          <article class="bank-overview-card"><span>Stage 4</span><strong>Execution</strong><p>Launch mechanics, KPI tracking, and fix/scale decisions.</p></article>
          <article class="bank-overview-card"><span>Stage 5</span><strong>Certification</strong><p>Case readiness, defense logic, and full end-to-end synthesis.</p></article>
        </div>
      </section>
    `,
  };

  if (specialMarkup[page]) {
    hero.insertAdjacentHTML('afterend', specialMarkup[page]);
    initRevealObserver(article);
    return;
  }

  const config = genericMap[page];
  if (!config) return;

  hero.insertAdjacentHTML('afterend', `
    <section class="chapter-experience reveal" id="chapter-experience">
      <div class="chapter-experience-head">
        <div>
          <p class="chapter-experience-phase">${config.phase}</p>
          <h3>${config.title}</h3>
        </div>
      </div>
      <div class="chapter-experience-grid">
        ${config.cards.map((card) => `
          <article class="chapter-experience-card">
            <span>${card.label}</span>
            <strong>${card.title}</strong>
            <p>${card.copy}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `);

  initRevealObserver(article);
}

function normalizeSpecialPageText() {
  const page = window.location.pathname.split('/').pop() || '';

  if (page === 'training-programme-t1-t5-five-stage-certification-programme.html') {
    document.title = 'Training Programme T1-T5: Five-Stage Certification Programme | RGM Recruitment Pack Playbook | Web Edition';
    document.querySelector('.chapter-sidebar h2')?.replaceChildren('Training Programme T1-T5: Five-Stage Certification Programme');
    document.querySelector('.chapter-summary h1')?.replaceChildren('Training Programme T1-T5: Five-Stage Certification Programme');
    document.querySelector('.chapter-head h2')?.replaceChildren('Training Programme T1-T5: Five-Stage Certification Programme');

    const sectionList = document.querySelector('.chapter-sidebar .section-list');
    if (sectionList) {
      sectionList.innerHTML = `
        <a href="#programme-overview">Programme Overview</a>
        <a href="#composite-scoring-model">Composite Scoring Model</a>
        <a href="#stage-1-of-5">Stage 1 Foundation</a>
        <a href="#stage-2-of-5">Stage 2 Diagnosis</a>
        <a href="#stage-3-of-5">Stage 3 Pack Design</a>
        <a href="#stage-4-of-5">Stage 4 Execution</a>
        <a href="#stage-5-of-5">Stage 5 Certification</a>
      `;
    }

    const noteCards = document.querySelectorAll('.note-card');
    const stageAnchors = ['stage-1-of-5', 'stage-2-of-5', 'stage-3-of-5', 'stage-4-of-5', 'stage-5-of-5'];
    noteCards.forEach((card, index) => {
      const first = card.querySelector('p');
      if (first && /STAGE\s+\d+\s+OF\s+5/i.test(first.textContent || '') && stageAnchors[index]) {
        card.id = stageAnchors[index];
      }
    });

    const footerLinks = document.querySelectorAll('.chapter-footer-nav a');
    if (footerLinks[0]) footerLinks[0].textContent = '← Chapter 8 Tools, Templates & Appendix';
    if (footerLinks[2]) footerLinks[2].textContent = 'Assessment Question Bank Full Bank — Stages 1–5 →';
  }

  if (page === 'assessment-question-bank-full-bank-stages-1-5.html') {
    document.title = 'Assessment Question Bank Full Bank — Stages 1–5 | RGM Recruitment Pack Playbook | Web Edition';
    document.querySelector('.chapter-sidebar h2')?.replaceChildren('Assessment Question Bank Full Bank — Stages 1–5');
    document.querySelector('.chapter-summary h1')?.replaceChildren('Assessment Question Bank Full Bank — Stages 1–5');
    document.querySelector('.chapter-head h2')?.replaceChildren('Assessment Question Bank Full Bank — Stages 1–5');
    const footerLinks = document.querySelectorAll('.chapter-footer-nav a');
    if (footerLinks[0]) footerLinks[0].textContent = '← Training Programme T1-T5: Five-Stage Certification Programme';
    if (footerLinks[2]) footerLinks[2].textContent = 'Return Home';
  }
}

initHomeSearch();
normalizeSpecialPageText();
injectChapterExperience();
