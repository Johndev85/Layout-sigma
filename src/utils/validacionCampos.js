function validacion() {
    var valor = document.getElementById("nombre").value
    if (
        valor == null ||
        valor.length == 0 ||
        valor.length > 50 ||
        /^\s+$/.test(valor)
    ) {
        document.getElementById("nombre").style.border = "2px solid red"
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
        document.getElementById("correo").style.border = "2px solid red"
    } else
        document
            .getElementById("buttonForm")
            .classList.add('data-toggle="modal" data-target="Modal"')
    return true
}

export default validacion()
