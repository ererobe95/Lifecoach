const toggleBtn = document.getElementById('toggle-btn');
const navBar = document.querySelector('.navbar')
const navContainer = document.querySelector('.navlinks-container');
const closeBtn = document.querySelector('.close-btn');
const links =document.querySelectorAll('.links')
const aboutList = document.querySelectorAll('.about-list');



//========toggle && close btn============
toggleBtn.addEventListener('click', () => {
  navContainer.classList.add('show')
  console.log('sqnto')
});

closeBtn.addEventListener('click', () => {
  navContainer.classList.remove('show')
  console.log('finito')
});
//=======end of toggle and close btn========


//===========scrolling function ==============
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    //remove sidebar after clicking a link
    navContainer.classList.remove('show')
    
    const id = e.currentTarget.getAttribute("href").slice(1)
    
  //pass the id into getElementById
    const element = document.getElementById(id)
  //get navbar height
    const navHeight = navBar.getBoundingClientRect().height
  
    let position = element.offsetTop - navHeight;
  //the scrollto method to scroll to selected section
    window.scrollTo({
      left:0,
      top:position
      })
    })
  })


//Intersection observer for about section
 const options = {
        threshold:.5,
      }
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if(!entry.isIntersecting){
            entry.target.classList.remove('showing')
          }else{
            entry.target.classList.add('showing')
          }
        })
      }, options)
      
      aboutList.forEach((lists) => {
        observer.observe(lists)
      })


//intersection observer for service section
const singleService = document.querySelectorAll('.single-service');

const slide =new IntersectionObserver((entries, slide) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting){
      entry.target.classList.remove('slide-in')
    } else{
      entry.target.classList.add('slide-in')
    }
  })
}, {
  threshold: 0.5,
})

singleService.forEach((single) => {
  slide.observe(single)
})


//faq section============
const singleContainer = document.querySelectorAll('.single-container');

singleContainer.forEach((single) => {
  const btns = single.querySelector('.faq-btn');
  btns.addEventListener('click', ()=> {
   single.classList.toggle('display')
   console.log('hello')
  })
})
//end of faq


//form IntersectionObserver
const form = document.querySelectorAll('.form');

const showing = new IntersectionObserver((entries, showing) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting){
      return
    }else{
      entry.target.classList.add('slideback')
    }
  })
})
form.forEach((forms) => {
  showing.observe(forms)
})
//end of form

//slider 1 
window.addEventListener('load', () =>{
slideShow()
})
let counter = 1;//initial start
const slides = document.querySelectorAll('.slides');
const nxtBtn = document.getElementById('nxtbtn');
const prevBtn = document.getElementById('prevbtn');

const slideShow = () => {
  //loop through all the slides and display none
  slides.forEach((slide) => {
    slide.style.display="none";
  })
  //display only the first slide
  slides[counter - 1].style.display= "block"
}

nxtBtn.addEventListener('click', () => {
  counter++
  if(counter > slides.length){
    counter =1
  }
  slideShow()
})
prevBtn.addEventListener('click', () => {
  counter--
  if(counter < 1){
    counter = slides.length
  }
  slideShow()
});

const slideContainer = document.querySelector('.slide-container')
const slideIn = document.querySelector('.sliding');

const fade = new IntersectionObserver((entries, fade) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting){
      return
    }else{
      slideContainer.classList.add('fade')
    }
  })
},{
  threshold:1
})

fade.observe(slideIn)
//end of slide


//modal
const images = document.querySelectorAll('.us-img img')
const us = document.querySelector('.us')

    images.forEach((image) => {
      image.addEventListener('click', (e)=>{
        const imgSrc = e.target.src
        modal(imgSrc)
      })
    })
    
    const modal = (src) => {
      const div = document.createElement('div')
      div.classList.add('modal')
      
      const img = document.createElement('img')
      img.src = src
      
      const closeBtn = document.createElement('button')
      closeBtn.classList.add('close')
      closeBtn.innerHTML = "<i class='fas fa-times'></i>"
      closeBtn.addEventListener('click', ()=>{
        div.remove()
      })
      div.append(img, closeBtn)
      us.append(div)
    }