let sandwich = {
    pan: "masa madre",
    proteina: "asado",
    queso: "queso suizo",
    salsas: ["lechuga", "tomates", "salsa de rábano"]
};

console.log(sandwich);

function sandwichFactory(pan, proteina, queso, salsas) {
    let sandwich = {};
    sandwich.pan = pan;
    sandwich.proteina = proteina;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}

let s1 = sandwichFactory(
    "trigo",
    "pavo",
    "provolone",
    ["mostaza", "cebolla frita", "rúcula"],
);
console.log(s1);

let s2 = sandwichFactory(
    "masa madre", "pollo", "chedar", ["ketchup", "mayonesa"]
)