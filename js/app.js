import { showAllCourses,showNewCourse,showArticle,showPopularCourse,showMenus,redirectToSearchPage,submitNewLetter } from "./funcs/shared.js";
AOS.init();

const $ = document

let firstLandingTitle = $.querySelector('#landing__text1')
let secondLandingTitle = $.querySelector('#landing__text2')


// new course slider start
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 15,
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 1500,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});
// new course slider ends

// home page typewriter start
window.addEventListener('load', () => {
  let firstLandingText = 'آکادمی آموزش'
  let secondLandingText = 'برنامه نویسی سبزلرن'
  let typeIndex = 0

  typeWriter(firstLandingText, typeIndex, firstLandingTitle)
  typeWriter(secondLandingText, typeIndex, secondLandingTitle)

  redirectToSearchPage()

  showAllCourses()

  showNewCourse()

  submitNewLetter()

  showArticle()
  
  showPopularCourse()

  showMenus()
})


const typeWriter = (text, index, element) => {
  if (index < text.length) {
    element.innerHTML += text[index]
    index++
  }

  setTimeout(() => {
    typeWriter(text, index, element)
  }, 100);
}
// home page typewriter ends
