
// 1. Cambiar texto del botón "Iniciar sesión" / "Cerrar sesión"
function toggleLogin(elemento) {
    if (elemento.innerText === "Iniciar sesión") {
        elemento.innerText = "Cerrar sesión";
    } else {
        elemento.innerText = "Iniciar sesión";
    }
}

// 2. Alerta al hacer clic en "Ver perfil" según el estado de la sesión
function mostrarPerfil() {
    let btnLogin = document.getElementById("btnLogin");

    if (btnLogin.innerText === "Cerrar sesión") {
        alert("usuario activo");
    } else {
        alert("usuario inexistente");
    }
}

// 3. Incrementar el contador de "Me gusta"
function sumarLike(elemento) {
    let contadorElemento = elemento.querySelector(".likes-count");
    let contadorActual = parseInt(contadorElemento.innerText);
    contadorActual++;
    contadorElemento.innerText = contadorActual;
}