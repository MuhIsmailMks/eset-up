const navContent = document.querySelector('.nav_content'); 
const nav = document.querySelector('nav')

// nav content
let ulIn = nav.children[1].innerHTML;
let newUl = document.createElement('ul');
newUl.setAttribute('class' , 'd-flex')
newUl.innerHTML += ulIn
let conIn = nav.children[3].innerHTML; 
let newCont = document.createElement('div');
newCont.setAttribute('class' , 'contact d-flex_center')
newCont.innerHTML += conIn
console.log(newCont);

function newNavCont(){
    if(window.innerWidth <= 1100){
        navContent.append(newUl)
        navContent.append(newCont)
    } else {
        console.log('no');
    }
}
newNavCont()
window.addEventListener('resize',() => {
    newNavCont();
})

// li active 

const lis = document.querySelectorAll('ul li');
lis.forEach(li => {
    li.addEventListener('click',() => {
        lis.forEach(li => {
            li.classList.remove('active')
        })
        li.classList.add('active')
    })
});

// scroll menu active
const sections = document.querySelectorAll(".section"); 

function scrollActiveMenu(){
    let leng = sections.length;
    while(--leng && window.scrollY + 97 < sections[leng].offsetTop){}
    lis.forEach(li => li.classList.remove('active'))
    lis[leng].classList.add("active");
}

scrollActiveMenu(); 
window.addEventListener('scroll', scrollActiveMenu)
// menu btn
const menuBtn = document.querySelector('.menu_btn');

menuBtn.addEventListener('click', () => {
    navContent.classList.toggle('active')
})

// client testimoni slide 
const swiperContainer = document.querySelector('.swiper')
const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');

// Disable the next button initially
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false, 
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
});

 