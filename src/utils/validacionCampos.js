function validacion() {
    var valor = document.getElementById("nombre").value
    if (
        valor == null ||
        valor.length == 0 ||
        valor.length > 50 ||
        /^\s+$/.test(valor)
    ) {
        document.getElementById("text_vali").style.display = "inline"
        valor.style.backgroundImage = "url(../styles/assets/icon-error.svg)"

        console.log("validation failed")
        return false
    } else var valor2 = document.getElementById("correo").value
    var re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (
        valor2 == null ||
        valor2.length == 0 ||
        valor2.length > 30 ||
        !re.exec(valor2)
    ) {
        document.getElementById("text_vali").style.display = "inline"
        valor2.style.backgroundImage = "url(../styles/assets/icon-error.svg)"
        console.log("validation failed")
    } else
        document
            .getElementById("buttonForm")
            .setAttribute("data-toggle", "modal")
    document.getElementById("buttonForm").setAttribute("data-target", "#modal")
    return true
}

export default validacion
