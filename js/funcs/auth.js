import { showSwal, saveToLocalStorage } from "./utiles.js"

const register = () => {

    const fullNameInput = document.querySelector('#full-name')
    const usernameInput = document.querySelector('#username')
    const phoneInput = document.querySelector('#phone')
    const emailInput = document.querySelector('#email')
    const passwordInput = document.querySelector('#password')


    const newUserInfo = {
        name: fullNameInput.value.trim(),
        username: usernameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
        confirmPassword: passwordInput.value.trim(),
    }

    fetch('http://localhost:4000/v1/auth/register', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserInfo)
    })
        .then(response => {
            if (response.status === 201) {
                showSwal('ثبت نام با موفقیت انجام شد', 'success', 'رفتن به داشبورد', (resault) => { location.href = 'index.html' })
            } else if (response.status === 409) {
                showSwal('نام کاربری یا ایمیل تکراری است', 'error', 'اصلاح اطلاعات', () => { })
            }
            return response.json()
        })
        .then(resault => {
            saveToLocalStorage('user', { token: resault.accessToken })
        })

}

export { register }