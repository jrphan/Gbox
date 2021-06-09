let menus = document.querySelector('.menus');
let menu = document.querySelector('.menus .menu');
let loading = document.querySelector('.loading');

window.addEventListener('load', function() {
    setTimeout(() => {
        loading.classList.add('hidden');     
    }, 800);
})

document.addEventListener('scroll', function() {
    let scrollY = window.pageYOffset;
    if (scrollY > 70) {
        menu.classList.add('active');
        menus.classList.add('active');
    } else {
        menu.classList.remove('active');
        menus.classList.remove('active');
    }
})

let hambuger = document.querySelector('.header .hambuger');
let navbar = document.querySelector('.navbar');

hambuger.addEventListener('click', function() {
    hambuger.classList.toggle('active');
    navbar.classList.toggle('active');
})