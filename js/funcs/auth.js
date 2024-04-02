import { showSwal, saveToLocalStorage, getFromLocalStorage } from "./utiles.js"

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
            showSwal("ثبت نام با موفقیت انجام شد", "success", "ورود به حساب کاربری", resault => location.href = 'login.html')
            return res.json()
        } else if (res.status === 409) {
            showSwal("نام کاربری یا ایمیل تکراری است", "error", "اصلاح اطلاعات")
        }
    })
        .then(data => {
            return data ? saveToLocalStorage('user', data.accessToken) : null
        })

}


const login = () => {
    const loginEmailInput = document.querySelector('#login-email')
    const loginPasswordInput = document.querySelector('#login-password')

    const userInfo = {
        identifier: loginEmailInput.value.trim(),
        password: loginPasswordInput.value.trim(),
    }


    fetch('http://localhost:4000/v1/auth/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo)
    }).then(res => {
        if (res.status === 200) {
            showSwal('خوش آمدید', 'success', 'صفحه اصلی',resault => location.href = 'index.html')
            return res.json()
        } else if (res.status === 401) {
            showSwal('نام کاربری یا رمز اشتباه است', 'error', 'اصلاح اطلاعات')
        }
    }).then(data => {
            saveToLocalStorage('loginToken', data.accessToken)
            console.log('data: ',data);
        })
}


const getMe = () => {
    fetch('http://localhost:4000/v1/auth/me',{
        headers: {
            Authorization: `bearer ${getFromLocalStorage('loginToken')}`
        },
    }).then(res => res.json())
    .then(data => {
        const showUsername = document.querySelector('#show-username')
        showUsername.innerHTML = data.name
        showUsername.setAttribute('href','#')
    })
}

export { register, login, getMe }