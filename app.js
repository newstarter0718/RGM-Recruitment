const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

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
