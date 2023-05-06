// mensaje para pestaña

let previousTitle = document.title

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = 'Te Amo Amir...!! Besos y Abrazos'
})

window.addEventListener('focus', () => {
    previousTitle = document.title
    document.title = 'Te Amo AMGC'
})

// musica para la pagina index
var musica = document.getElementById("musica"); // Obtener la etiqueta de audio
var botonMusica = document.getElementById("boton-musica"); // Obtener el botón de encendido / apagado

botonMusica.addEventListener("click", function () {
    if (musica.paused) { // Si la música está pausada, comenzar a reproducirla
        musica.play();
        botonMusica.innerHTML = "Apagar";
    } else { // Si la música está reproduciéndose, pausarla
        musica.pause();
        botonMusica.innerHTML = "Encender";
    }
});

// animaciones en el srcoll de la pagina es decir ,
// da un efecto en tardar en cargar la pagina muy elegante

ScrollReveal().reveal('.PrimeraSeccion');
ScrollReveal().reveal('.Detalles', { delay: 500});
ScrollReveal().reveal('.SegundaSeccion', { delay: 500});
ScrollReveal().reveal('.TerceraSeccion', { delay: 500});
ScrollReveal().reveal('.CuartaSeccion', { delay: 500});
ScrollReveal().reveal('.cumple', { delay: 500});
