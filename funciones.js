let sonidoClick = document.querySelector(".sonidoClick")

let fondo = document.querySelector(".general")
let titulo = document.querySelector(".titulo")
var items = document.querySelectorAll(".item")
let botonModo = document.querySelector(".modo")

let h2 = document.querySelectorAll(".nombre")
let label = document.querySelectorAll(".info")
let modo = 0

botonModo.addEventListener("click",function(){
    if (modo == 0){
        oscuro()
        modo = 1
    }else{
        claro()
        modo = 0
    }
})

for (i=0;i<items.length;i++){
    items[i].addEventListener("click",function(){
        sonidoClick.play()
        localStorage.setItem('nombre', this.querySelector('.nombre').textContent);
        localStorage.setItem('imagen', this.querySelector('.imagen').innerHTML);
        localStorage.setItem('info', this.querySelector('.info').textContent);
        localStorage.setItem('modo', modo);
        window.location.href = "item.html"
    });
}



function claro(){

fondo.style.backgroundImage = "linear-gradient(to bottom, #FFFFFF, #e4fff9)"

for (i=0;i<items.length;i++){
    items[i].style.borderColor = "#c1c1c1";
    items[i].style.backgroundColor = "#FFFFFF";
}

titulo.style.color = "#003BAB"

for (i=0;i<h2.length;i++){
    h2[i].style.color = "#00A587";
}

for (i=0;i<label.length;i++){
    label[i].style.color = "#00A587";
}

}

function oscuro(){

    fondo.style.backgroundImage = "linear-gradient(to bottom, #004377, #00345D)"
    
    for (i=0;i<items.length;i++){
        items[i].style.borderColor = "#c1c1c1";
        items[i].style.backgroundColor = "#00345D";
    }
    
    titulo.style.color = "#FFFFFF"
    
    for (i=0;i<h2.length;i++){
        h2[i].style.color = "#51B3FF";
    }
    
    for (i=0;i<label.length;i++){
        label[i].style.color = "#51B3FF";
    }
    
}

if (modo == 0){
    claro()
}else{
    oscuro()
}