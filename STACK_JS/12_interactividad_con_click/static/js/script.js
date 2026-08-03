document.getElementById("colorButton1").addEventListener("click", function () {
    cambiarColor1();
});

// Función que cambia el color de fondo al hacer clic.
function cambiarColor1() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColor2();
});

// Función que cambia el color de fondo al hacer clic.
function cambiarColor2() {
    let colores = ["#8c584e", "#44826e", "#604c87", "#8f844a", "#577996", "#6c3c28"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById("colorButton2").style.backgroundColor = colorAleatorio;
}

document.getElementById("colorButton3").addEventListener("click", function () {
    cambiarColor3();
});

// Función que cambia el color de fondo al hacer clic.
function cambiarColor3() {
    let colores = ["#ff4422", "#26f6b0", "#641ef1", "#6f6114", "#1688e4", "#ff8150"];
    let colorAleatorio1 = colores[Math.floor(Math.random() * colores.length)];
    let colorAleatorio2 = colores[Math.floor(Math.random() * colores.length)];
    let colorAleatorio3 = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio1;
    document.getElementById("colorButton3").style.color = colorAleatorio2;
    document.getElementById("colorButton3").style.backgroundColor = colorAleatorio3;
}