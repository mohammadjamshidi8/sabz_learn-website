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
                Swal.fire({
                    title: "ثبت نام با موفقیت انجام شد",
                    icon: "success"
                  });
               } else if (response.status === 409) {
                Swal.fire({
                    title: "نام کاربری یا ایمیل تکراری است",
                    icon: "error"
                  });
               }
        })
        .then(resault => console.log(resault))

}

export { register }