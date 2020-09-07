const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navlist');
  const navLinks = document.querySelectorAll('.navlink');
  const body = document.querySelector('body');
//togle navigation
  burger.addEventListener('click', () => {

    nav.classList.toggle('nav-active');
    body.classList.toggle('stopscrollonburger');
//animate navLinks
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ' ';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
    // burger animation
    burger.classList.toggle('toggle');

});

}

navSlide();
