import { getUrlParam } from "./funcs/utiles.js"

import { showMenus,showSearchedCourses } from "./funcs/shared.js"

window.addEventListener('load' , () => {
    showMenus()

    const urlParams = getUrlParam('search')

    showSearchedCourses(urlParams)
})