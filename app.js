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
        threshold:.5
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
  rootMargin: "-40px"
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
