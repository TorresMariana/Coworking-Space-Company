
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
console.log('indiceactual:', indiceActual);
console.log(totalTestimonios);

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
    console.log('distancia:', distancia);
    carrusel.style.transform = `translateX(${distancia}%)`;
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarCarrusel(); 
});


