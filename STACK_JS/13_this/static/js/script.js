// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");
let textoBoton = boton.textContent;

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;

    // Cambia el texto del botón usando `this`
    this.innerText = "¡Texto cambiado!";
    if (textoBoton === "Haz clic en mi"){
        this.innerText = "¡Texto cambiado!";
    } else{
        this.innerText = "Haz clic en mi"
    }

});