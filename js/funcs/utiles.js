const showSwal = (title, icon, buttons, callback) => {
    swal.fire({
        title,
        icon,
        buttons,
    }). then(resault => callback(resault))
}

const saveToLocalStorage = (key,value) => {
    return localStorage.setItem(key,JSON.stringify(value))
}


const getFromLocalStorage = () => {
    return JSON.stringify(localStorage.getItem(key))
}


const getToken = () => {
    return JSON.parse(localStorage.getItem('user')).token
}

export { showSwal,saveToLocalStorage,getFromLocalStorage,getToken }