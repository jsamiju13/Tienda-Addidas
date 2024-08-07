let fondo = document.querySelector(".general")
let titulo = document.querySelector(".titulo")
let labelMetodo = document.querySelector(".label1")
let labelDireccion = document.querySelector(".label2")

let nombre = localStorage.getItem('nombre');
let imagen = localStorage.getItem('imagen');
let info = localStorage.getItem('info');
let modo = localStorage.getItem("modo")

let h1 = document.querySelector("h1")
let img = document.querySelector(".imagen")
let precio = document.querySelector(".info label")
let metodo = ""
let direccion = ""

var boton1 = document.querySelector(".boton")
var items = document.querySelectorAll(".item")

h1.textContent = nombre
img.innerHTML = imagen
precio.textContent = info


function sweetSimple(datos,producto){
    Swal.fire({
    title: producto,
    text: datos,
    icon: 'info',
    confirmButtonText: 'Comprar',
    showCloseButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Compra:",
                text: "Compra realizada con exito!",
                icon: "info",
            });
        }
    });
}

boton1.addEventListener("click", function(){
    metodo = document.querySelector(".metodo").value
    direccion = document.querySelector(".direccion").value
    datos = "el precio del artículo es: "+info+", su metodo elegido fué: "+metodo+" y la direccion elegida fué: "+direccion
    sweetSimple(datos,nombre)
})



function claro(){

    fondo.style.backgroundImage = "linear-gradient(to bottom, #FFFFFF, #e4fff9)"

    titulo.style.color = "#003BAB"

    precio.style.color = "#00A587";

    labelMetodo.style.color = "#00A587"
    labelDireccion.style.color = "#00A587"

    boton1.style.color = "#003BAB"

}

function oscuro(){

    fondo.style.backgroundImage = "linear-gradient(to bottom, #004377, #00345D)"

    titulo.style.color = "#FFFFFF"

    precio.style.color = "#51B3FF";

    labelMetodo.style.color = "#51B3FF"
    labelDireccion.style.color = "#51B3FF"

    boton1.style.color = "#003BAB"

}
    
if (modo == 0){
    claro()
}else{
    oscuro()
}