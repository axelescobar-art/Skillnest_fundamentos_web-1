document.addEventListener('DOMContentLoaded', () => {

    // 1. Mensaje de alerta con "Bienvenido" y el correo al hacer clic en "Ingresar"
    const btnIngresar = document.getElementById('btn-ingresar');
    const inputEmail = document.querySelector('.search-input');

    if (btnIngresar && inputEmail) {
        btnIngresar.addEventListener('click', () => {
            const correo = inputEmail.value.trim();
            if (correo !== '') {
                alert(`Bienvenido\n${correo}`);
            } else {
                alert('Por favor, ingresa un correo electrónico.');
            }
        });
    }

    // 2. Incrementar en 1 el contador de libros al hacer clic en "+"
    const botonesSumar = document.querySelectorAll('.btn-sumar');
    const contadorElemento = document.getElementById('numero-contador');
    let cantidadLibros = 0;

    botonesSumar.forEach(boton => {
        boton.addEventListener('click', () => {
            cantidadLibros++;
            if (contadorElemento) {
                contadorElemento.textContent = cantidadLibros;
            }
        });
    });

    // 3. Cambiar la miniatura/poster del video al pasar el cursor (Hover)
    const video = document.getElementById('video-principal');
    const imagenInicial = 'static/images/tacos.jpg';
    const imagenHover = 'static/images/flautas.jpg';

    if (video) {
        video.addEventListener('mouseenter', () => {
            video.poster = imagenHover;
        });

        video.addEventListener('mouseleave', () => {
            video.poster = imagenInicial;
        });
    }

});