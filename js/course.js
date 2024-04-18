import { getUrlParam } from "./funcs/utiles.js"
import { getAndShowSingleCourse,showMenus,getAndShowRelatedCourse,submitCommentFunc } from "./funcs/shared.js"

// course detail accordion start

let accordionHead = document.querySelector('#accordion-head')
let accordionBody = document.querySelector('#accordion-body')

accordionHead.addEventListener('click', () => {
  accordionBody.classList.toggle('h-0')
})


// course detail accordion ends


window.addEventListener('load', () => {

  showMenus()

  const urlParams = getUrlParam('name')

  getAndShowSingleCourse(urlParams)

  submitCommentFunc()

  getAndShowRelatedCourse(urlParams)

})