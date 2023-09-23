(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };
  refs.closeModalBtn.addEventListener('click', toggleMenu);
  refs.openModalBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.modal.classList.toggle('is-hidden');
  }
})();