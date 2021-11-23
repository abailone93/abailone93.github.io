/*DOM STYLE*/
function domStyle(){
    document.body.style.backgroundColor = "#F0E0F2";
    document.getElementById("fila").style.border = "medium solid #E120F9";
    document.getElementById("sintaxis").style.font = "italic bold 2px";
}
/*DOM ELEMENT*/
function domElement(){
    var cajas = document.getElementsByTagName("div");
    cajas.setAttribute("style", "backgroung-color: #BD8FC3;");
}
/*DOM DOCUMENT*/
function domDocument(){

}
/*DOM EVENTS*/
function domEvents(){
    document.getElementById("boton").addEventListener("mouseover",imagenload);
}
function imagenload(){
    document.getElementById("imagen").src = "../media/img/domStyle.PNG";
}
