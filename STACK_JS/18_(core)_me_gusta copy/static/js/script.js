// Seleccionamos todas las tarjetas de publicación
const publicaciones = document.querySelectorAll('.publicacion');

// Recorremos cada publicación individualmente
publicaciones.forEach((post) => {
    // Buscamos el botón y el contador 'span' SOLAMENTE dentro de la tarjeta actual
    const boton = post.querySelector('.btn-like');
    const textoLikes = post.querySelector('.likes span');
    
    // Variable independiente para guardar los likes de esta tarjeta
    let contador = 0;

    // Asignamos el evento de clic al botón de esta tarjeta
    boton.addEventListener('click', () => {
        contador++; // Aumenta solo el contador de esta publicación
        textoLikes.innerText = `${contador} like(s)`; // Actualiza solo el texto correspondiente
    });
});