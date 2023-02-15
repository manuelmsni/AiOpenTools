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



window.addEventListener("load", function(){
    
    if (window.innerWidth <= 1100) {
        document.querySelector('.widgets').classList.add('hidden');
        document.querySelector('.models').classList.add('hidden');
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


document.getElementById("toogleWidgets").addEventListener("click", function(){
    document.querySelector('.widgets').classList.toggle('hidden');
});
document.getElementById("toogleModels").addEventListener("click", function(){
    document.querySelector('.models').classList.toggle('hidden');
});

window.addEventListener('resize', function(){
    const widgets = document.querySelector('.widgets');
    const models = document.querySelector('.models');
    if (window.innerWidth <= 1100) {
        if(!widgets.classList.contains('hidden')){
            widgets.classList.add('hidden');
        }
        if(!models.classList.contains('hidden')){
            models.classList.add('hidden');
        }
    } else {
        if(widgets.classList.contains('hidden')){
            widgets.classList.remove('hidden');
        }
        if(models.classList.contains('hidden')){
            models.classList.remove('hidden');
        }
    }
});