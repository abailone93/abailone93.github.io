function seleccionarElemento(){
    var seleccion = document.querySelectorAll('#nuevo #new[title^=p]').title // pregunta
    for (i=0; i <= seleccion.length; i++){
        seleccion[i].style.backgroundColor = "#ffffff";
        seleccion[i].style.color = "black";
    }
    var elemento = document.querySelectorAll('#lista-item');
    for (i=0; i <= elemento.length; i++){
        elemento.dataset.category.backgroundColor = "#303DD8";
        elemento.dataset.category.color = "white";
    }
    

}
function seleccionData(){
    var botonSeleccion = document.querySelectorAll('#lista-item')
    for (let i = 0; i < botonSeleccion.length; i++) {
        //const element = array[i];
        console.log(botonSeleccion);
    }
}
function seleccionHtml(){
    
}