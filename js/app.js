
//MENU HAMBURGUESA
let menuCheckbox = document.getElementById('menu-hamburguesa');
let logo = document.querySelector('.header__logo');

function menuHamburguesa() {
    //abre o cierra el menú
    menuCheckbox.checked = !menuCheckbox.checked;

    // Si el checkbox está marcado (menú abierto), cambiar color y z-index del logo
    if (menuCheckbox.checked) {
        logo.style.color = 'var(--color-primario)';
        logo.style.zIndex = 3;
        logo.style.transition = 'all .5s';
    } else {
        logo.style.color = 'var(--color-secundario)';
        logo.style.zIndex = '';  
    }
}

function cerrarmenuHamburguesa() {
    // Establecer el checkbox como falso para cerrar el menú
    menuCheckbox.checked = false;

    // Restaurar el color del logo cuando el menú se cierra
    logo.style.color = 'var(--color-secundario)';
    logo.style.zIndex = '';
}




//CARRUSEL DE TESTIMONIOS
let indiceActual = 1;
const carrusel = document.getElementById('carrusel');
const totalTestimonios = document.querySelectorAll('.testimonio__contenido').length + 1;

function botonAnterior(){
    if(indiceActual>1){
        indiceActual--;
    }
    actualizarCarrusel();
}

function botonSiguiente(){
    if(indiceActual < totalTestimonios - 1){
        indiceActual++;
    }
    actualizarCarrusel();

}

function actualizarCarrusel(){
    // const distancia = indiceActual * -100;
    const distancia = 20 + (indiceActual * -20);
    carrusel.style.transform = `translateX(${distancia}%)`;
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarCarrusel(); 
});



//PREGUNTAS FRECUENTES

// let texto = document.getElementById('preguntas__frecuentes__texto');
// texto.classList.add('preguntas__frecuentes__texto');
// function visualizarRespuesta(button){
    
//     // texto.classList.toggle('preguntas__frecuentes__texto--open');
//     texto.classList.add('preguntas__frecuentes__texto--open');

//     if(texto.classList.contains('preguntas__frecuentes__texto--open')){
//         button.classList.add('preguntas__frecuentes__boton--open');
//     }else{
//         button.classList.remove('preguntas__frecuentes__boton--open');
//     }
// }


let texto = document.getElementById('preguntas__frecuentes__texto');
texto.classList.remove('preguntas__frecuentes__texto--open');
let boton = document.querySelector('.preguntas__frecuentes__boton');

function visualizarRespuesta(button){
    
    texto.classList.toggle('preguntas__frecuentes__texto--open');

    if(texto.classList.contains('preguntas__frecuentes__texto--open')){
        button.classList.add('preguntas__frecuentes__boton--open');
    }else{
        button.classList.remove('preguntas__frecuentes__boton--open');
    }
}







//BLOG
const contenido = document.getElementById('blog-contenido');

contenido.style.display = 'none';
function verMas(){
    if (contenido.style.display === 'none') {
        contenido.style.display = 'flex';
    } else {
        contenido.style.display = 'none';
    }

}




