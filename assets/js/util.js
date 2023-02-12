/**
 * Smooth scroll on links to a element in the page by id on its href attribute
 */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * Sets the href attribute for a <link id="tema" rel="stylesheet" href="">
 * by clicking in a <button class="tema" src="[pathForTheLink]">X</button>
 */

const buttons = document.querySelectorAll('.tema');
const stylesheet = document.getElementById('tema');
const idiomas = document.querySelectorAll('.idioma');



/*
// Obtener la URL actual
const currentURL = window.location.href;

// Buscar una cadena específica en la URL
if (currentURL.indexOf("$mint") != -1) {
    stylesheet.setAttribute('href') = "assets/css/tema-cafe.css";
} else if (currentURL.indexOf("$cafe") != -1) {
    stylesheet.setAttribute('href') = "assets/css/tema-cafe.css";
}
*/
/*
// Obtener la URL actual
var currentURL = window.location.href;

// Añadir un parámetro de consulta a la URL
currentURL = currentURL + "?clave=valor";

// Redirigir a la nueva URL
window.location = currentURL;

// Buscar el parámetro de consulta en la URL
var params = new URLSearchParams(currentURL.search);

// Obtener el valor de una clave en particular
var valor = params.get("clave");

// Hacer algo con el valor (por ejemplo, mostrarlo en una alerta)
alert(valor);
*/








window.addEventListener("load", function(){

    //Añade la ubicación del tema a la url
    if(window.location.href.indexOf("tema") == -1){
        window.location = window.location.href + "?tema=" + stylesheet.getAttribute('href');
    } else{
        var currentURL = window.location.href;
        var inicio = currentURL.indexOf("tema=") + 5;
        var substr = currentURL.substring(inicio);
        stylesheet.href = substr;
    }
    
    if (window.innerWidth <= 1100) {
        document.querySelector('.widgets').classList.add('hidden');
    };
    buttons.forEach(button => {
        if(stylesheet.getAttribute('href') == button.getAttribute('src')){
            button.classList.add('active')
        }
    });
});


idiomas.forEach(idioma => {
    idioma.addEventListener('click', function() {
        if(!idioma.hasAttribute('.active')){
            var ruta = idioma.getAttribute('src');
            var currentURL = window.location.href;
            var fin = currentURL.indexOf("tema=");
            var tema = currentURL.substring(fin);
            window.location = ruta + "?" + tema;
        }
    });
});

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if(!button.hasAttribute('.active')){
            var currentURL = window.location.href;
            var fin = currentURL.indexOf("tema=") + 5;
            var substr = currentURL.substring(0,fin);
            window.location = substr + button.getAttribute('src');

            /*
            buttons.forEach(button => {
                button.classList.remove('active');
                if(stylesheet.getAttribute('href') == button.getAttribute('src')){
                    button.classList.add('active');
                };
            });
            */
        ;}
    });
});