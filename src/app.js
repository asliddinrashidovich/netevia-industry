var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".sectionNext",
    prevEl: ".sectionPrev",
  },
});

// AOS js
AOS.init();

const hamburgerBtn = document.getElementById('hamburgerbutton')
const hamburgerMenu = document.getElementById('hamburgermenu')
const hamburgerDelete = document.getElementById('hamburgerDelete')
const body = document.querySelector('body')

hamburgerBtn.addEventListener('click', ()=> {
  hamburgerMenu.classList.toggle('left-0');
  hamburgerMenu.classList.toggle('-left-full');
  body.classList.toggle('overflow-y-hidden')
})
hamburgerDelete.addEventListener('click', () => {
  hamburgerMenu.classList.remove('left-0');
  hamburgerMenu.classList.add('-left-full');
  body.classList.toggle('overflow-y-hidden')
})