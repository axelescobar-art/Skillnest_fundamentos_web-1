//🔢 Contador de interacciones en una app: Imagina que una aplicación registra la cantidad de veces que un usuario interactúa con un botón.
// 1.-Escribe un programa que imprima los números del 1 al 10 para simular las interacciones de un usuario. Ejemplo de salida esperada:
//Interacción 1
//Interacción 2
//...
//Interacción 10​​

function interacciones() {
    for (let i = 0; i <= 10; i++) {
        alert(`Haz interactuado ${i} veces`)
    }
}

//____________________________________________________________________________________________________________________________________________________
//⏳ 2.- Simular una barra de carga: Crea un programa que simule una barra de carga mostrando porcentajes de progreso del 0% al 100% en incrementos
//  de 10. Ejemplo de salida esperada:
//Cargando... 0%
//Cargando... 10%
//Cargando... 100%
//Carga completa.​

function simularBarra(){
    for(i = 0; i <= 100; i<= 100)
        if(i < 100){
            alert(`cargando... ${i}%`)
        } else if(i == 100){
            alert(`Carga completa ${i}`)
        }
}

//____________________________________________________________________________________________________________________________________________________
//🛍️ 3.- Simulación de descuento progresivo en una tienda: Una tienda en línea ofrece un descuento progresivo en una promoción especial. El primer 
// producto tiene un 5% de descuento, el segundo un 10%, el tercero un 15%, y así sucesivamente hasta el quinto producto con un 25%. Escribe un
// programa que calcule y muestre los descuentos aplicados a cada producto. Ejemplo de salida esperada:
//Producto 1 - Descuento aplicado: 5%
//Producto 2 - Descuento aplicado: 10%
//Producto 3 - Descuento aplicado: 15%
//Producto 4 - Descuento aplicado: 20%
//Producto 5 - Descuento aplicado: 25%​​

function descuento() {
    for (let i = 5; i <= 25; i += 5) {
        let producto = parseInt(prompt(`coloque el valor del producto`))
        alert(`producto ${producto} - descuento aplicado: ${i}% 
            \nvalor final: ${producto - (producto * (i/100))}`)
    }
}

//____________________________________________________________________________________________________________________________________________________
//🎮 4.- Calcular el total de puntos en un videojuego: Un jugador gana 50 puntos cada vez que completa un nivel. Escribe un programa que calcule 
// la puntuación total después de 5 niveles usando un bucle. Ejemplo de salida esperada:
//Puntos acumulados: 250​​

function puntos(){
    for (let i = 5; i > 0; i--) {
        alert(`tienes ${i} notificaciones nuevas`)
    }
    alert(`no tienes notificaciones`)
}

//____________________________________________________________________________________________________________________________________________________
//🔔 5.- Contador de notificaciones en una app: Imagina que una aplicación de mensajería muestra un contador de notificaciones pendientes. 
// Escribe un programa que muestre un mensaje con la cantidad de notificaciones pendientes y las marque como leídas una por una hasta llegar 
// a 0. Ejemplo de salida esperada:
//Tienes 5 notificaciones nuevas.
//Tienes 4 notificaciones nuevas.
//Tienes 1 notificación nueva.
//No tienes notificaciones pendientes.​​

function notificaciones(){
    let puntos = 0
    while (puntos <= 200) {
        alert(`CALCULANDO PUNTOS...`)
        puntos += 50
    }
    alert(`GANASTE ${puntos}\n¿INTENTAR DE NUEVO? \nSI\nNO<--`)
}

//____________________________________________________________________________________________________________________________________________________
//💡 Tips
//✅ Recuerda usar for cuando conozcas la cantidad de repeticiones y while cuando dependas de una condición externa.
//🧪 Usa console.log() para verificar los valores en cada iteración.
//🧹 Mantén tu código organizado y bien indentado para mejorar su legibilidad.
//📚 Contenidos que estás aplicando

//🔁 Bucles for y while para iteraciones controladas y condicionales.
//⚖️ Uso de operadores de comparación para evaluar condiciones.
//🖨️ Aplicación de console.log() para depurar y verificar resultados.
//📦 Manipulación de variables y estructuras de datos.


