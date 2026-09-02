console.log("Conexion exitosa...");
const publicaciones = document.querySelectorAll('.publicacion');

publicaciones.forEach((post) => {
    
    const boton = post.querySelector('.btn-like');
    const textoLikes = post.querySelector('.likes span');
    
    let contador = 0;

    boton.addEventListener('click', () => {
        contador++;
        textoLikes.innerText = `${contador} like(s)`;
    });
});