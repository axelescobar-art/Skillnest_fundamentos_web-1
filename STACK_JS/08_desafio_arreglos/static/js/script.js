console.log(`hola xd`)

function filtrarVideojuegos() {
    let videojuegos = [
        { nombre: "HollowKnight Silksong", edadRecomendada: 7 },
        { nombre: "Metro 2033", edadRecomendada: 3 },
        { nombre: "Dying light", edadRecomendada: 18 },
        { nombre: "Subnautica", edadRecomendada: 12 }
    ];
    let edadMinima = 12;
    let recomendados = [];
    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].edadRecomendada <= edadMinima) {
            recomendados.push(videojuegos[i].nombre);
        }
    }
    alert(`Juegos recomendados:  ${recomendados.join(' - ')}`);
}

//🎵 Contador de canciones favoritas
function musica() {
    let historialReproduccion = [
        "Machine love",
        "Impostor syndrome",
        "Jane",
        "Chase",
        "Boys dont cry",
        "Bad Habits",
    ];
    let cancionBuscada = "Machine love";
    let contador = 0;
    for (let i = 0; i < historialReproduccion.length; i++) {
        if (historialReproduccion[i] === cancionBuscada) {
            contador++;
        }
    }
    alert(`La canción ${cancionBuscada} se reprodujo ${contador} veces.`);
}

//🕹️ Organizadores de torneo de videojuegos
function torneo() {
    let jugadores = [
        "Littleghost",
        "Mitsugamer",
        "Tommy",
        "TioPostalDude",
        "ELBebeConZapatillasNike",
        "Lirio",
        "Javier",
        "yuji",
    ];
    let tamanoGrupo = 3;
    let grupos = [];
    let grupoActual = [];
    for (let i = 0; i < jugadores.length; i++) {
        grupoActual.push(jugadores[i]);
        if (grupoActual.length === tamanoGrupo || i === jugadores.length - 1) {
            grupos.push(grupoActual);
            grupoActual = [];
        }
    }
    alert(`Grupos formados: ${grupos.join('  ')}`);
}