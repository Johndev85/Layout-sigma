const $departamento = document.getElementById("departamento")
const $ciudad = document.getElementById("ciudad")

const departamentos = () => {
    const indice = $departamento.selectedIndex
    console.log(indice)
    const opcionSeleccionada = $departamento.options[indice]
    console.log(opcionSeleccionada.text)
    // mostrarCiudades(opcionSeleccionada)
}

const mostrarCiudades = () => {
    const option = document.createElement("option")
    const valor = new Date().getTime()
    option.value = valor
    option.text = valor
    select.appendChild(option)
}

$departamento.addEventListener("change", departamentos)

// fetch("http://localhost:3000/Amazonas")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         return data
//     })
