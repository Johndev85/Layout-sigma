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

    const datosApi = () => {
        // const url = "http://localhost:3000/Cesar"
        // const urlApi = url + indice
        fetch("http://localhost:3000/Cesar")
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
    $departamento.addEventListener("change", datosApi)
    $departamento.addEventListener("change", mostrarCiudades(datosApi))
}

export default datosApi()
