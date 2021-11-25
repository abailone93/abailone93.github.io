function crearElemento(){
    var parrafo = document.createElement("p");
    var contenido = document.createTextNode("Alex Bailon");
    parrafo.appendChild(contenido);
    var contenedor = document.getElementById("nuevo");
    contenedor.appendChild(parrafo);
    var primero = document.getElementById("pri");
    primero.appendChild(contenedor);
    document.body.appendChild(primero);
    
}