import { showSwal } from "./utiles.js"

const register = () => {

    const nameInput = document.querySelector('#full-name')
    const usernameInput = document.querySelector('#username')
    const phoneInput = document.querySelector('#phone')
    const emailInput = document.querySelector('#email')
    const passwordInput = document.querySelector('#password')


    const newUserInfos = {
        name: nameInput.value.trim(),
        username: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        password: passwordInput.value.trim(),
        confirmPassword: passwordInput.value.trim(),
    }

    fetch('http://localhost:4000/v1/auth/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserInfos)
    }).then(res => {
        if (res.status === 201) {
            showSwal("ثبت نام با موفقیت انجام شد","success","رفتن به سایت",resault => location.href = 'index.html')
            return res.json()
        } else if (res.status === 409) {
            showSwal("نام کاربری یا ایمیل تکراری است","error","اصلاح اطلاعات")
        }
    })
        .then(data => console.log('data : ',data))

}


const login = () => {
    // code
}


const getMe = () => {
    // code
}

export { register }