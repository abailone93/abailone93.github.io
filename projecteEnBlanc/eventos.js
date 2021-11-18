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
function programa() {
    alert("Programa iniciado");
}
function imagencargada(){
    alert("Imagen cargada");
}