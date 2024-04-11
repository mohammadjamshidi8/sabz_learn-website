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
    return token;
}

const getUrlParam = (key) => {
    let urlParam = new URLSearchParams(window.location.search)

    return urlParam.get(key)
}

export { showSwal , saveToLocalStorage,getFromLocalStorage,getUrlParam }