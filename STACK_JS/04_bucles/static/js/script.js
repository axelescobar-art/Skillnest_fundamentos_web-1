console.log("Prueba de conexion con js")

/* ejemplo de bucle */
function contarHasta2() {
    for (let i = 0; i < 6; i++) {
        alert(i);
    }
}

function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}

function recorreLista() {
    // Lista es un tipo de dato (array/Lista)
    // [] = ["nombre", 4, True, [2,4]]
    /*
    let nombre = "Carlos";
    alert(nombre);
    let nombres = ["Carlos", "Maria"]
    alert(nombres[0]) --> Imprime Carlos
    alert(nombres[1]) --> Imprime Maria
    alert(nombres.legth); --> 2 (Largo de nombres)
    */
    let usuarios = ["Special week", "V1", "Reaper leviatan", "Teto", "jacket"];
    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción   
    }
}

function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos... ${datosPendientes} de 5`);
        datosPendientes--;
    }
}

function validarContraseña() {
    let contraseñaCorrecta = false;

    while (!contraseñaCorrecta) {
        alert (intento = prompt("Ingresa tu contraseña:"));
        if (intento === "1234") {
            contraseñaCorrecta = true;
            let ("Acceso concedido.");
        } else {
            alert ("Contraseña incorrecta, intenta de nuevo.");
        }
    }
} 