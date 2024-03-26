let shareAccordionHead = document.querySelectorAll('#share-accordion-head')
let shareAccordionBody = document.querySelectorAll('#share-accordion-body')


shareAccordionHead.forEach(item => {
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('h-0')
    })
})
// shareAccordionHead.addEventListener('click', () => {
//   shareAccordionBody.classList.toggle('h-0')
// })