const $departamento = document.getElementById("departamento")
const $ciudad = document.getElementById("ciudad")

function datosApi() {
    const departamentos = () => {
        const indice = $departamento.selectedIndex
        console.log(indice)
        const opcionSeleccionada = $departamento.options[indice]
        console.log(opcionSeleccionada.text)
        return opcionSeleccionada.text
    }

    const accesoApi = (dato) => {
        fetch("http://localhost:3000/" + String(dato))
            .then((res) => res.json())
            .then((data) => {
                console.log("api ok")
                console.log(data[8])
                return data
            })
    }

    function mostrarCiudades(index) {
        const option = document.createElement("option")
        const valor = index
        for (i in valor) {
            option.text = valor[i]
            $ciudad.appendChild(option)
            console.log("options ok")
        }
    }

    $departamento.addEventListener("change", departamentos)
    $departamento.addEventListener("change", accesoApi(departamentos))
    $departamento.addEventListener("change", mostrarCiudades(accesoApi))
}

export default datosApi()
