import { login, getMe } from "./funcs/auth.js";


const loginBtn = document.querySelector('#login-btn')

if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault()
        login()
        getMe()
    })
}

window.addEventListener('load', () => {
    getMe()
})