console.log("Conexion exitosa")

function saludar(/* parametro */) {
    alert("¡Hola, bienvenido!");
}

//saludar(); //Ejecucion de una funcion

//Funciones con parametros
//El parametro recibe un valor para trabajar en la funcion.
//El parametro recibe el tipo de dato al momento de tomar valor.
function saludarParam(nombre) {
    alert("¡Hola, " + nombre + "!");
}
saludarParam("Axel"); //Ejecucion de la funcion con parametros. (argumento)
saludar("Beatriz");

function encontrarMayor(){
function encontrarMaximo(a, b) {
    if (a > b){
        return a;
    } else {
        return b;
    }
}

let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
//maximo guardara el valor del retorno.
alert(`El número mayor entre, ${numero1}, y, ${numero2}, es: 10`);
}

function ultrakill(a,b,c){
    return a + b - c;
}

function mostrarResultado(){
//Creacion de variables
let num1 = parseInt(prompt("ingrese primer numero"))
let num2 = parseInt(prompt("ingrese segundo numero"))
let num3 = parseInt(prompt("ingrese tercero numero"))
// mostrar resultados
let resultado = operaciones(num1, num2, num3)
alert(`La operaciones de ${num1} + ${num2} - ${num3} = ${resultado}`)
}

/*
Crear una funcion que reciba un parametro y permita a traves de un bucle contar hasta este.
Ej: Se recibe el numero 5 y muestra: 1 - 2 - 3 - 4 - 5
*/

function motrarConteo(){
//Creacion de variables
let parametros = parseInt(prompt(`Ingrese el limite del contador`))
//Mostrar resultado
resultado = contarNumeros(parametro);
alert(resultado.join(" - "))
}

function contarNumero(){
    let numeros = []
    for(let i = 0; i <= a; i++){
        numeros.push(i)
    }
    return numeros;
}

/*Añadir una condicion para que el valor ingresado no sea superior a 100 */

function mostrarConteo(){
    //Creacion de variables
    let parametro = parseInt(prompt (`Ingrese el limite del contador`));
}
