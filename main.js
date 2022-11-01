//menu show and hidden
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

//remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
