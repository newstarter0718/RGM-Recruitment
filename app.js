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

const chapterSearch = document.getElementById('chapter-search');
if (chapterSearch) {
  const cards = Array.from(document.querySelectorAll('.chapter-card-link'));
  chapterSearch.addEventListener('input', () => {
    const query = chapterSearch.value.trim().toLowerCase();
    cards.forEach((card) => {
      const haystack = card.dataset.search || '';
      card.hidden = !!query && !haystack.includes(query);
    });
  });
}
