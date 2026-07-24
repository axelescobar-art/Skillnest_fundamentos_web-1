// //datos
// console.log(nombres[2]); //Muestra maria
// let compras = [500, 2300, 12000, 4500, 3000];
// let alumnos = ["ana", "pedrio", "maria", "jose"];
// let os = ["carlos", 18, true];
// let frutas = ["manzana", "pera", "kiwi", "sandia"]

// //_____________________________________________________________________________________________________________________________________________________
// //📍 Obtener el último elemento
// let frutas2 = ["platano", "mandarina", "naranja", "granada"];
// let ultima = frutas[frutas.length - 1];
// //variable.legth -1 siempre trae el ultimo elemento.

// console.log(ultima);

// //_____________________________________________________________________________________________________________________________________________________
// //Desafio
// //Del arreglo ["Hola", "a", "todos", "los", "programadores!"]
// //Mostrar el penultimo elemento y el concatenado.

// let contenido = ["hola", "a", "los", "los", "programadores"];
// console.log(algo [algo.legth - 2] + algo[algo.legth - 1])

//_____________________________________________________________________________________________________________________________________________________
let listaTareas = ["barrer", "cocinar", "realizar compras"];
function manipularArreglor(){
    // modificar un elemento del arreglo
listaTareas[1] = "Construir";
//Añadir un ejemplo al final de la lista
listaTareas.push("Cocinar");
//Eliminar el ultimo elemento y mostrarlo
let eliminado = listaTareas.pop(); //punto pop sirve para eliminar un elemto
//añadir un elemento al inicio de la lista
listaTareas.unshift("boxear"); //agrega al principio unshift
//elimina el primer elemento de la lista
eliminado += listaTareas.shift(); //.shift elimina el primero

//mostrar resultado
alert(listaTareas.join(" - "));
}
//_____________________________________________________________________________________________________________________________________________________

//recorre un arreglo
function recorrearreglo(){

}
//_____________________________________________________________________________________________________________________________________________________
function sumarElementos(){
let ventas = [10000,5000,12000,8000];
let total = 0;

for(let i=0;i<ventas.length;i++){
    total += ventas[i]; // += acomula

}

alert(`El resultado final es: ${total}`);
}
//_____________________________________________________________________________________________________________________________________________________
//Calcular un promedio
function calcularPromedio(){
    let notas = [5.8, 6.2, 4.9, 6.5];
    let suma = 0;

    for(let i=0;i<notas.length;i++){
        suma += notas[i];
    }

    alert(`La suma acumulada es: ${suma}`)
    let promedio = suma / notas.length;
    alert(`El promedio de las notas; ${notas.join(' / ')}\nPromedio: ${promedio}`);
}

//_____________________________________________________________________________________________________________________________________________________
//condiciones dentro de bucle
function buscarMayoresEdad(){
    let edades = [12, 15, 18, 20, 25];
    let mayores = [];
    for (let i = 0; i < edades.length; i++)
        //Condiciones para buscar mayores de 18 
    if (edades[i] >= 18){
        mayores.push(edades[i]) // añade la posicion que cumple la condicion
    }
}
//_____________________________________________________________________________________________________________________________________________________
function encontrarMenos(){
let numeros = [10,35,7,90,22];
let menor = numeros[0];
let mayor = numeros[0];

for(let i=1;i<numeros.length;i++){
    if(numeros[i] < menor){
        menor = numeros[i];
    } else if (numero[i] > mayor){
        mayor = numero[i];
    } else{
        console.log(`valor que no afecta: ${numeros[i]}`)
    }
}
alert(`De los numeros ${numeros.join(' / ')}
El menor es: ${menor}
El mayor es: ${mayor}`);
}
//_____________________________________________________________________________________________________________________________________________________
function calcularVentas(){
    let ventas = [5000, 8000, 12000, 3000, 10000, 5000,4000]
    let total = 0;
    let mayor = ventas[0];
    let valorEliminado = ventas.pop();
    let valor1 = parseInt(prompt("Ingrese primer valor: "));
    let valor2 = parseInt(prompt("ingresa primer valor:"));
    ventas.push(valor1, valor2);
    for (let i = 0; i <ventas.length; i++){
        total += ventas[i];
        if (ventas[i] > mayor){
            mayor = ventas[i];
            if (ventas[i] >= 10000){
                mayores.push(ventas[i])
                    contadorVentas++;
            }
        }
    }

    alert(`Total ventas: ${total}\nMayor: ${mayor}
    promedio: ${total / ventas.length}
    valores sobres $10.000: ${mayores.join(' / ')}
    Conteo de mayores: ${contadorVentas} ventas
    valor Eliminado: ${valorEliminado}`);
}


//_____________________________________________________________________________________________________________________________________________________
// # 💻 Ejercicios

// ## Ejercicio 1
// Crear el siguiente arreglo.
// ```javascript
// let edades = [15,18,20,14,25];
// Mostrar:
// - Primera edad.
// - Última edad.
// - Cantidad de elementos.



// ____________________________________________________________________________________________________________________________________________________
// ## Ejercicio 2
// Crear un arreglo con cinco nombres.
// Mostrar todos utilizando un ciclo `for`.



// ____________________________________________________________________________________________________________________________________________________
// ## Ejercicio 3
// Crear un arreglo con cinco notas.
// Calcular el promedio.
// Mostrar:
// ```text
// Promedio: X



// ____________________________________________________________________________________________________________________________________________________
// ## Ejercicio 4
// Crear el arreglo.
// ```javascript
// [18,20,15,22,19,25,17]
// ```
// Mostrar solamente las temperaturas mayores a 20.



// ____________________________________________________________________________________________________________________________________________________
// ## Ejercicio 5
// Crear un arreglo con diez números.
// Contar:
// - Cuántos son pares.
// - Cuántos son impares.



// ____________________________________________________________________________________________________________________________________________________
// ## Ejercicio 6
// Crear el siguiente arreglo.
// ```javascript
// [5000,12000,3000,4500,7000]
// ```
// Mostrar:
// - Venta mayor.
// - Venta menor.
// - Total vendido.



// ____________________________________________________________________________________________________________________________________________________
// ## Ejercicio 7
// Crear el siguiente arreglo.
// ```javascript
// ["Ana","Pedro","María","Juan","Camila","Tomás"]
// ```
// Mostrar únicamente los nombres con más de cuatro letras.

// ____________________________________________________________________________________________________________________________________________________
// ## Ejercicio 8
// Crear un arreglo con ocho números.
// Mostrar únicamente los múltiplos de 3.



// ____________________________________________________________________________________________________________________________________________________
// ## Ejercicio 9
// Crear el siguiente arreglo.
// ```javascript
// [15,16,17,18,17,16,19,20]
// ```
// Calcular:
// - Cantidad de mayores de edad.
// - Cantidad de menores de edad.



// ____________________________________________________________________________________________________________________________________________________

// ## Ejercicio 10 (Desafío)

// ```javascript
// let ventas = [12000,18000,5000,21000,9000,15000,8000];
// ```

// Mostrar:

// - Total de ventas.
// - Promedio.
// - Venta mayor.
// - Venta menor.
// - Cantidad de ventas mayores a $10.000.
// - Cantidad de ventas menores o iguales a $10.000.
// - Índice donde ocurrió la venta mayor.
// - Índice donde ocurrió la venta menor.

// ---

// # 🚀 Desafío Final
// Una empresa registra las ventas de sus vendedores.
// ```javascript
// let vendedores = ["Ana","Pedro","María","José","Camila"];

// let ventas = [350000,510000,420000,610000,480000];



// ____________________________________________________________________________________________________________________________________________________

// Desarrolla un programa que permita:

// 1. Mostrar cada vendedor con su venta.
// 2. Calcular el total vendido.
// 3. Calcular el promedio.
// 4. Mostrar el mejor vendedor.
// 5. Mostrar el vendedor con menor venta.
// 6. Mostrar los vendedores que vendieron más de $450.000.
// 7. Contar cuántos vendedores superaron el promedio.
// 8. Indicar si la empresa alcanzó una meta de **$2.300.000**.

// ### ⭐ Desafío Extra

// Permite que el usuario agregue nuevas ventas utilizando:

// - `push()`
// - `pop()`
// - `shift()`
// - `unshift()`

// y vuelve a calcular todas las estadísticas automáticamente.