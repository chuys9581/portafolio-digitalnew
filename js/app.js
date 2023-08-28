let activeContainer = null;
const elf= document.querySelector('.elf');
const taggie= document.querySelector('.taggie');
const linkrear= document.querySelector('.linkrear');
const amx= document.querySelector('.amx');
const wordpress = document.querySelector('.wordpress');
const back = document.querySelector('.back');
const full = document.querySelector('.full');
const front = document.querySelector('.front');
const container = document.querySelector('.container-works');
const elementsToPause = document.querySelectorAll('.ima-work, .btn-rosa');
const softSkillButton = document.querySelector('.soft-skill');
const hardSkillButton = document.querySelector('.hard-skill');
const indicator = document.querySelector('.indicator');
const containerIndicator = document.querySelector('.container-indicator');
const softcontainer = document.querySelector('.change-soft');
const hardcontainer = document.querySelector('.change-hard');
// Obtén el botón "My formation" y el popup
var btnPopup = document.querySelector(".btn-popup");
var popup = document.getElementById("myPopup");
// Obtén el botón "My Curriculum" por su id
var downloadButton = document.getElementById("downloadPdf");


wordpress.style.display = 'none';
back.style.display = 'none';
full.style.display = 'none';
front.style.display = '';
hardcontainer.style.display='none';


// Función para aplicar el efecto al hacer clic en cualquier contenedor
function handleContainerClick(event) {
    const clickedContainer = event.currentTarget;

    // Restaurar el estilo del contenedor activo anterior (si existe)
    if (activeContainer !== null) {
        activeContainer.style.backgroundColor = '#FBFBFB'; // Restaurar el color de fondo original
        activeContainer.style.color = 'black'; // Restaurar el color de texto original
        document.querySelector('.boxes').style.borderRadius = '1rem 1rem 0 0';
        activeContainer.style.transform = 'scale(1)';
    }

    // Cambiar el background color y el color del texto del contenedor clicado
    document.querySelector('.container-uno').style.borderRadius = '1rem 1rem 0rem 0rem';
    document.querySelector('.container-cuatro').style.borderRadius = '1rem 1rem 0rem 0rem';
    back.style.display = 'none';
    clickedContainer.style.backgroundColor = '#1C2E52'; // Nuevo color de fondo activo
    clickedContainer.style.color = 'white'; // Nuevo color de texto activo
    clickedContainer.style.transition = '.8s';
    clickedContainer.style.transform = 'scaleY(1.3)';
    elf.style.height = '3rem';
    elf.style.width = '4rem';
    elf.style.transition= '1s';
    taggie.style.height = '3.2rem';
    taggie.style.width = '4.1rem';
    taggie.style.transition= '1s';
    linkrear.style.height = '3.2rem';
    linkrear.style.width = '4.1rem';
    linkrear.style.transition= '1s';
    amx.style.height = '3.2rem';
    amx.style.width = '4.1rem';
    amx.style.transition= '1s';


    if (clickedContainer === activeContainer) {
        document.querySelector('.boxes').style.borderRadius = '0';
    }

    // Actualizar el contenedor activo actual
    activeContainer = clickedContainer;

    // Nueva funcionalidad: Cambiar entre las clases full y front
    if (activeContainer === document.querySelector('.container-dos')) {
        full.style.display = 'flex';
        front.style.display = 'none';
        back.style.display = 'none';
        wordpress.style.display = 'none';
        document.querySelector('.container-uno').style.borderRadius = '1rem 1rem 0rem 0rem';
        document.querySelector('.container-dos').style.borderRadius = '1rem 1rem 0rem 0rem';
        document.querySelector('.container-tres').style.borderRadius = '1rem 1rem 0rem 0rem';
    } else {
        full.style.display = 'none';
        front.style.display = 'flex';
    }

    if(activeContainer === document.querySelector('.container-tres')){
        back.style.display = 'flex';
        full.style.display = 'none';
        front.style.display = 'none';
        document.querySelector('.container-dos').style.borderRadius = '1rem 1rem 0rem 0rem';
    }

    if(activeContainer === document.querySelector('.container-cuatro')){
        wordpress.style.display = 'flex';
        back.style.display = 'none';
        full.style.display = 'none';
        front.style.display = 'none';
        document.querySelector('.container-tres').style.borderRadius = '1rem 1rem 0rem 0rem';
    } else{
        wordpress.style.display = 'none';
    }

}


// Obtener todos los elementos con las clases "container-uno", "container-dos", "container-tres", "container-cuatro"
const containers = document.querySelectorAll('.container-uno, .container-dos, .container-tres, .container-cuatro');

// Agregar el evento de clic a cada contenedor
containers.forEach((container) => {
    container.addEventListener('click', handleContainerClick);
});

// Simulamos un clic en el container-uno al cargar la página
const containerUno = document.querySelector('.container-uno');
containerUno.click();


/* JS para el carrousel de imagenes */

// Función para pausar la animación
function pauseCarousel() {
    container.style.animationPlayState = 'paused';
    container.style.webkitAnimationPlayState = 'paused';
}

// Función para reanudar la animación
function resumeCarousel() {
    container.style.animationPlayState = 'running';
    container.style.webkitAnimationPlayState = 'running';
}

// Obtén todas las imágenes dentro del carrusel
const images = document.querySelectorAll('.ima-work');

// Agrega eventos de mouse a cada imagen
images.forEach(image => {
    image.addEventListener('mouseenter', pauseCarousel);
    image.addEventListener('mouseleave', resumeCarousel);
});

// Agrega eventos de mouse a cada elemento
elementsToPause.forEach(element => {
    element.addEventListener('mouseenter', pauseCarousel);
    element.addEventListener('mouseleave', resumeCarousel);
});

// Posición inicial centrada
indicator.style.transform = 'translateX(0%)';

// Cambiar el color de los botones según la posición de la bolita
function updateButtonColors() {
    const isSoftSkillSelected = indicator.style.transform === 'translateX(0%)';
    
    softSkillButton.style.color = isSoftSkillSelected ? '#cd3bd0' : 'white';
    hardSkillButton.style.color = isSoftSkillSelected ? 'white' : '#cd3bd0';
}

// Event listener para el botón de Soft Skills
softSkillButton.addEventListener('click', () => {
    indicator.style.transform = 'translateX(0%)';
    updateButtonColors();
    softcontainer.style.display='';
    hardcontainer.style.display='none';
});

// Event listener para el botón de Hard Skills
hardSkillButton.addEventListener('click', () => {
    indicator.style.transform = `translateX(69px)`;
    updateButtonColors();
    softcontainer.style.display='none';
    hardcontainer.style.display='';
});

// Llamar a updateButtonColors al cargar la página para establecer los colores iniciales
updateButtonColors();

// Cuando se haga clic en el botón "My formation", muestra el popup
btnPopup.addEventListener("click", function() {
    popup.style.display = "block";
});

// Cuando se haga clic en el botón de cierre (X), oculta el popup
document.getElementById("closePopup").addEventListener("click", function() {
    popup.style.display = "none";
});

// Cierra el popup si se hace clic fuera de él
window.addEventListener("click", function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
});

// URL de tu archivo PDF
var pdfUrl = "/pdf/Curriculum Vitae Profesional.pdf"; // Cambia esta ruta a la ubicación de tu PDF

// Agrega un event listener para el clic en el botón
downloadButton.addEventListener("click", function() {
    // Crea un elemento de enlace temporal
    var link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank"; // Abre el PDF en una nueva ventana/tab
    link.download = "Curriculum Vitae Profesional.pdf"; // Nombre del archivo que se descargará

    // Dispara el evento de clic en el enlace
    link.click();
});