'use strict';

///////////////////////////////////////
// Modal window
const nav = document.querySelector('.nav')
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((x)=>{
  x.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//Cookies 
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML  = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it!</button>';
const header = document.querySelector('header');
header.prepend(message);
const cookieButton = document.querySelector('.btn--close-cookie');
message.style.backgroundColor = '#37383d'
message.style.width = '130%-'
cookieButton.addEventListener('click',()=>{
  message.remove();
})
//Cookies 

//Smooth Scroll
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault()
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})

const h1 = document.querySelector('h1');


h1.closest('.header').style.background = 'var (--gradient-secondary)'

const yo = [...h1.parentElement.children]
yo.forEach((el)=>{
  if(el !== h1) el.style.display = 'none'
})


tabsContainer.addEventListener('click',function(e){
  const clickedButton = e.target.closest('button')
  //Guard Clause
  if(!clickedButton)return

  clickedButton.parentElement.querySelector('.operations__tab--active').classList.remove('operations__tab--active')
  clickedButton.classList.add('operations__tab--active')

  const contentNum = `.operations__content--${clickedButton.getAttribute('data-tab')} `
  const toActive = document.querySelector(contentNum)

  toActive.parentElement.querySelector('.operations__content--active').classList.remove('operations__content--active')
  toActive.classList.add('operations__content--active')
})




const handleOver = function(e,opacity){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')

    siblings.forEach(el=>{
      if(el !== link)el.style.opacity = this
    });
  }
}

nav.addEventListener('mouseover', handleOver.bind(0))
nav.addEventListener('mouseout', handleOver.bind(1))

let stateNav = false
const header1 = document.querySelector('.header')
const stickyNav = function(){
  if(stateNav){
    nav.classList.add('sticky')
  }else{
    nav.classList.remove('sticky')
  }
  stateNav = !stateNav
};
const headerObserver = new IntersectionObserver(stickyNav,{root:null, threshold:0});
headerObserver.observe(header)




// revealSections 
let stateRev = false
const allSections = document.querySelectorAll('.section')


const revealSection = function(ent,obs){ 
  
  const[entries] = ent
  if(!entries.isIntersecting) return;
  entries.target.classList.remove('section--hidden');
  obs.unobserve(entries.target)

}


const sectionObserver = new IntersectionObserver(revealSection,{root:null,threshold:0.15})

allSections.forEach(function(section){
  sectionObserver.observe(section)
  section.classList.add('section--hidden')

})































