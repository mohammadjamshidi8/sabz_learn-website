import { register } from "./funcs/auth.js";

const registerBtn = document.querySelector('#submit-register')


registerBtn.addEventListener('click', (e) => {
    e.preventDefault()
    register()
})