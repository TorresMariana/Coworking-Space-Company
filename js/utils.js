document.querySelectorAll('#offcanvasNavbar2 .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId.startsWith('#')) return;

        e.preventDefault();

        const targetEl = document.querySelector(targetId);
        const offcanvasEl = document.getElementById('offcanvasNavbar2');
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);

        if (offcanvas) offcanvas.hide();

        //que cierre el offcanvas
        setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 350);
    });
});





const blogCards = document.getElementById('blogCards');
const buttonToggle = document.getElementById('buttonToggle');

buttonToggle.addEventListener('click', () => {
    blogCards.classList.toggle('d-none');

    buttonToggle.textContent = blogCards.classList.contains('d-none')
      ? 'View More'
      : 'View Less';
});