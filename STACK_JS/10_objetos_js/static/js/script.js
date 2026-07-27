let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: [
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes: function () {
        alert("Pan:", this.pan);
        alert("Carne:", this.carne);
        alert("Queso:", this.queso);
        alert("Extras:", this.extras.join(", ")
        );
    }
};

//acceder al pan
console.log(hamburguesaEspecial.mostrarIngredientes())

//Variable\Objeto con metodo

let jojos = {
    nombre: "jonathan",
    apellido: "joestar",
    edad: "23",
    mostrarNombre: function () {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Apellido: ${this.apellido}`)
        console.log(`Edad: ${this.edad}`)
    },
    mostrarNombreAlert: function () {
        alert(`Nombre: ${this.nombre}`)
        alert(`Apellido: ${this.apellido}`)
        alert(`Edad: ${this.edad}`)
    }
}

console.log(jojos.mostrarNombre())