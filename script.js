console.log("Página Cargada");

function click_editar() {
    alert("Editando perfil");
    
    //Seleccionar un elemento en específico para cambiarlo
    var elemento_p = document.querySelector('#descripcion'); //Selecciona el elemento que tiene el ID dado para cambiarlo
    console.log(elemento_p);
    elemento_p.innerText = "Desarrolladora, empoderada, creativa y muy divertida";

    //Modificar la imagen de perfil
    var imagen_perfil = document.querySelector('.card-header img');
    imagen_perfil.src = 'images/jane-m.jpg';

    //Agregar una clase a mi h1
    var nombre = document.querySelector('h1'); //Selecciona etiqueta h1
    nombre.classList.add('purple');
}
//En el HTML se debe incluir "onclick="..."" para incluir lo establecido por la función

var doble_click = 0
function dobleclick_avatar() {
    doble_click++;
    console.log("Ha hecho doble click: "+doble_click+" veces");
}
//En el HTML se debe incluir "ondblclick="..."" para incluir la lectura de los doble clicks en el elemento determinado

function over() {
    console.log("El mouse está sobre Jane");
    var nombre = document.querySelector('h1'); //Selecciona la etiqueta h1
    nombre.style.backgroundColor = "red"; //Cambia el color de fondo ("background-color") a rojo cuando se pase el cursor sobre el nombre
}
//Función "mouseover" marca en la pantalla cuando se pasa el mouse sobre el elemento determinado
function out() {
    console.log("El mouse está fuera de Jane");
    var nombre = document.querySelector('h1'); //Selecciona la etiqueta "h1"
    nombre.style.backgroundColor = "white"; //Cambia el color de fondo a blanco cuando se deja de pasar el cursor por h1
}
//Función "mouseout" marca en la pantalla cuando se aleja el mouse del elemento determinado

function cambieNombre(elemento_h1) { //Se recibe el elemento h1 = "this"
    console.log(elemento_h1); //La etiqueta se trata como texto

    if(elemento_h1.innerText === "Jane Doe") {
        elemento_h1.innerText = "Juana de Arco";
    }
    else {
        elemento_h1.innerText = "Jane Doe"
    }
    //Intercambio de nombres al hacer click ("onclick"); si no es uno, será el otro

    //elemento_h1.innerText = "Juana de Arco"; (propiedad "innerText" cambia el texto del elemento)
}

function cambiaImagen(elemento_img) {
    //elemento_img.src = "images/gear.png";
    console.log(elemento_img.src); //.src da la ruta completa (hacia los enlaces de las imágenes)
    if(elemento_img.src.includes('images/map-marker.png')) { //.includes se refiere a que si la ruta "src" incluye lo establecido en el ()
        elemento_img.src = "images/gear.png";
    }
    else {
        elemento_img.src = "images/map-marker.png"
    }

    var location = document.querySelector('h3'); //Selecciona el elemento "h3"
    location.style.textDecoration = "underline"; //Adhiere al elemento la propiedad "text-decoration" con valor "underline"
}

function elimine(elemento_p) { //Se recibe el párrafo "p" en variable "elemento_p"
    elemento_p.remove(); //Elimina el elemento donde se hace doble click
}

function  cambioInput() {
    console.log("Hubo un cambio");
    var input = document.querySelector('#nombre'); //Selecciona el elemento que tiene el ID "nombre"
    console.log(input.value); //Valor que ingresa el usuario

    var elemento_h1 = document.querySelector('h1'); //Selecciona la etiqueta h1
    elemento_h1.innerText = input.value;
}