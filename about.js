// about.js
document.addEventListener('DOMContentLoaded', () => {
  // GSAP animations if GSAP is available
  if (window.gsap) {
    gsap.from(".header-inner", { duration: 0.8, y: -30, opacity: 0, ease: "power2.out" });
    gsap.from(".about-header h1", { duration: 0.7, y: 20, opacity: 0, delay: 0.15 });
    gsap.from(".about-header .lead", { duration: 0.7, y: 20, opacity: 0, delay: 0.25 });
    // animate each card staggered
    gsap.from(".about-card", { duration: 0.9, y: 20, opacity: 0, stagger: 0.12, delay: 0.3, ease: "power3.out" });
    gsap.from(".footer", { duration: 0.6, y: 30, opacity: 0, delay: 0.95 });
  } else {
    // fallback: add class to reveal content (CSS already looks fine)
    document.querySelectorAll(".about-card").forEach((c) => c.style.opacity = 1);
  }

  // small keyboard shortcut: / focuses search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/') {
      const input = document.getElementById('yearInput');
      if (input) { input.focus(); e.preventDefault(); }
    }
  });
});

/**
 * Search player/year helper:
 * - finds any element containing the typed text (case-insensitive)
 * - scrolls to first match and highlights it briefly
 */
function searchPlayer() {
  const val = (document.getElementById('yearInput')?.value || '').trim();
  if (!val) {
    alert('Please enter a year or keyword to search (e.g., 2016).');
    return;
  }

  const re = new RegExp(val.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'); // escape & case-insensitive
  // search visible text nodes inside main content
  const main = document.getElementById('mainContent');
  const elements = Array.from(main.querySelectorAll('p, h1, h2, .card-subtitle, .record-details, .stat-label, .record-box, .highlight-box, .highlight-quote'));

  let firstMatch = null;
  elements.forEach(el => {
    if (!firstMatch && re.test(el.textContent || '')) firstMatch = el;
    // remove previous highlights
    el.classList.remove('search-highlight');
  });

  if (firstMatch) {
    // add highlight and scroll
    firstMatch.classList.add('search-highlight');
    firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // remove highlight after 2.2s
    setTimeout(() => firstMatch.classList.remove('search-highlight'), 2200);
  } else {
    alert('No matching content found for "' + val + '".');
  }
}
