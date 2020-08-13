import datosApi from "./utils/datosApi"
import validacion from "./utils/validacionCampos"

datosApi()
envioDatos()

const btnForm = document.getElementById("buttonForm")
btnForm.addEventListener("click", validacion())
