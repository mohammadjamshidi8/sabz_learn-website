const showSwal = (title, icon, confirmButtonText,callback) => {
    Swal.fire({
        title,
        icon,
        confirmButtonText
    }).then(callback)
}

export { showSwal }