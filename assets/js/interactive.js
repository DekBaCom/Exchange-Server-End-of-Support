document.addEventListener('DOMContentLoaded', () => {
  initHeroGlow();
  initWizard();
  initTCOCalculator();
  initChecklistPersistence();
});

function initHeroGlow() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    hero.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    hero.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
}

function initWizard() {
  const container = document.querySelector('.wizard-container');
  if (!container) return;
  const steps = container.querySelectorAll('.wizard-step');
  const nextBtns = container.querySelectorAll('[data-next]');
  
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.next;
      steps.forEach(s => s.classList.remove('active'));
      container.querySelector(`#${targetId}`).classList.add('active');
    });
  });
}

function initTCOCalculator() {
  const slider = document.querySelector('.calc-slider');
  if (!slider) return;
  const display = document.querySelector('#calc-user-val');
  const output = document.querySelector('#calc-result-val');
  
  slider.addEventListener('input', () => {
    const users = slider.value;
    display.textContent = users;
    // Simple logic: $160/user/year over 5 years
    const total = (users * 160 * 5).toLocaleString();
    output.textContent = `$${total}`;
  });
}

function initChecklistPersistence() {
  const cbs = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  const path = window.location.pathname;
  
  cbs.forEach((cb, i) => {
    cb.removeAttribute('disabled'); // Ensure interactive
    const key = `check_${path}_${i}`;
    cb.checked = localStorage.getItem(key) === 'true';
    cb.addEventListener('change', () => {
      localStorage.setItem(key, cb.checked);
    });
  });
}
