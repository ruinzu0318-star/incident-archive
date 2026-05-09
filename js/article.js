/* article.js — shared logic for all article pages */

/* Timeline expand/collapse */
function tlToggle(btn) {
  const detail = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  btn.classList.toggle('open', !isOpen);
  detail.classList.toggle('open', !isOpen);
}

/* Back to top */
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
