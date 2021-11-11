const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu-links');
    const menuLinks = document.querySelectorAll('.menu-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    menuLinks.forEach((link,index) =>{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      
    });
}
navSlide();