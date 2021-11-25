function modificarElemento(){
var elementodentroelemento = document.querySelectorAll('div > p');
    for (var i=0; i <= elementodentroelemento.length; i++){
        elementodentroelemento[i].style.backgroundColor = "#7E3895";
        elementodentroelemento[i].style.color = "white";
    }
}
