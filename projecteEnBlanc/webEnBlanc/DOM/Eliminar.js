function eliminarElemento(borra){
    parrafosobra = document.getElementById("borrame");
    if(!parrafosobra){
        alert("El elemento seleccionado no existe");
    } else{
        padre = parrafosobra.parentNode;
        padre.removeChild(parrafosobra);
    }
    //contenedor.parentNode.removeChild(contenedor);
}