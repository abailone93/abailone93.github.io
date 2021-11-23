//add event listener
var raton = document.getElementById("boton");
raton.addEventListener("mouseover",encima);
raton.addEventListener("click",hanFetClick);
raton.addEventListener("mouseout",fuera);

function encima() {
    document.getElementById("fecha").innerHTML += "Clica ya que estas ahí!<br>";
}
function hanFetClick() {
    document.getElementById("fecha").innerHTML= Date();
}
function fuera() {
    document.getElementById("fecha").innerHTML += "No hagas como que no has visto nada y clica el boton!<br>";
}
//onload
setInterval(function programa() {
    alert("Programa iniciado");
}, 2000);
setTimeout(function imagencargada(){
    alert("Imagen cargada");
}, 3000);
/*-----------------------------------------------------*/
var lista = document.getElementById("add_lista");
lista.addEventListener("click", añadirTarea);
function añadirTarea(){
    document.getElementById("tasca").innerHTML += "Aqui está tu nueva tarea <br>";
    await sleep(2000);
    print("Hola sleep");
}