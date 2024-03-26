// course detail accordion start

let accordionHead = document.querySelector('#accordion-head')
let accordionBody = document.querySelector('#accordion-body')

accordionHead.addEventListener('click', () => {
  accordionBody.classList.toggle('h-0')
})


// course detail accordion ends
