console.log("Conexion exitosa...");

//Seleccion de titulo con querySelector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del titulo es:`)

//Seleccionar un parrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo);

//Seleccionar dentro de nav
let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

//Seleccionar parrafo
let parrafos = document.querySelector(".texto");
console.log(parrafos.textContent); // "Este es el primer párrafo."

//Elemento inexistente
let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null
if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}

//tarea:
/*Crear un boton y aplicar condicion al igual que ejemplo...
-debe cambiar su texto al momento de hacerle click
-debe activarse un hover js cambiando el color de fondo
*/

const botonCambiado = document.querySelector(`click`, function(){
if(botonCambiado !== null){
    if (this,textContent === "Haz click en mi y cambiare")
        this.textContent = "Ves que es distinto?"
        this.style.backgroundColor = ""
        this.style.color = ""
} else {
    this.textContent = "Haz click en mi y cambiare"
    this
    this
}


})