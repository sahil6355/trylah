const nav = document.getElementById('nav');

window.onscroll = function() {
    let top = window.scrollY;

    if (top >= 100) {
        nav.classList.add('css-navbar');
    } else {
        nav.classList.remove('css-navbar');
    }
}