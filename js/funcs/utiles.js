const showSwal = (title, icon, confirmButtonText,callback) => {
    Swal.fire({
        title,
        icon,
        confirmButtonText
    }).then(callback)
}

const saveToLocalStorage = (key,value) => {
    localStorage.setItem(key,value)
}

const getFromLocalStorage = (key) => {
    const token = localStorage.getItem(key)
}

export { showSwal , saveToLocalStorage,getFromLocalStorage }