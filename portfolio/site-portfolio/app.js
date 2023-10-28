// Código anterior para rolagem...
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Novo código para caixas interativas
const boxes = document.querySelectorAll('.interactive-box');

boxes.forEach(box => {
    box.addEventListener('click', function() {
        const content = this.querySelector('.box-content');
        content.style.display = (content.style.display === 'none' ? 'block' : 'none');
    });
});
// ... Seu código anterior ...

const detailButtons = document.querySelectorAll('.details-btn');

detailButtons.forEach(button => {
    button.addEventListener('click', function() {
        const details = this.nextElementSibling;
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
});
