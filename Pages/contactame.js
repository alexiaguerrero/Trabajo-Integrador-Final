const Formulariousuario = document.querySelector("#Formulariousuario");

const contenedorHTML = document.querySelector(".contenedorusuario");
const usuarios = [];

const renderizarUsuarios = () => {
    contenedorHTML.innerHTML = "";
    for (const usuario of usuarios) {
        contenedorHTML.innerHTML += `
            <div class="card-user">
                <h2>Nombre: ${usuario.nombre}</h2>
                <p>Email: ${usuario.email}</p>
                <p>Numero: ${usuario.numero}</p>
                <p>Provincia: ${usuario.provincia}</p>
            </div>
        `;
    }
}

Formulariousuario.addEventListener("submit", (event) => {
    event.preventDefault();
    usuarios.push({
        nombre: Formulariousuario.nombre.value,
        email: Formulariousuario.email.value,
        numero: Formulariousuario.numero.value,
        provincia: Formulariousuario.provincia.value
    });
    renderizarUsuarios();
    Formulariousuario.reset();
    document.querySelector("#mensaje-enviado").textContent = "Su solicitud ha sido enviada. Pronto nos pondremos en contacto con usted.";
});
