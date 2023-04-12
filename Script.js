
const Formulariousuario = document.querySelector("#Formulariousuario")

Formulariousuario.addEventListener("Submit", (event) =>{
    event.preventDefault()
    console.log(Formulariousuario.provincia.value)

})