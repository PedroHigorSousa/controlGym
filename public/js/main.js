const link = document.querySelector('#main ul li a');

link.addEventListener('click', () => {
    link.classList.add('active');
});