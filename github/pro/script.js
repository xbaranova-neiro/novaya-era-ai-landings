const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  mobileNav.hidden = expanded;
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    mobileNav.hidden = true;
  });
});

document.querySelectorAll('details.module').forEach((module) => {
  module.addEventListener('toggle', () => {
    if (!module.open) return;
    document.querySelectorAll('details.module[open]').forEach((other) => {
      if (other !== module) other.open = false;
    });
  });
});

document.querySelectorAll('[data-open-payment]').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.openPayment);
    if (!dialog) return;
    const scrollPosition = window.scrollY;
    dialog.showModal();
    requestAnimationFrame(() => window.scrollTo({ top: scrollPosition, behavior: 'instant' }));
  });
});

document.querySelectorAll('.payment-dialog').forEach((dialog) => {
  dialog.querySelector('[data-close-payment]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) dialog.close();
  });
});
