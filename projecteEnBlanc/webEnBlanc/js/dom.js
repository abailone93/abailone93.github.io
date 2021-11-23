function domStyle(){
    document.body.style.backgroundColor = "#F0E0F2";
    document.getElementById("fila").style.border = "medium solid #E120F9";
    document.getElementById("sintaxis").style.font = "italic bold 2px";
}
function domElement(){
    document.getElementsByTagName("div")[1].setAttribute("style", "backgroung-color: #BD8FC3;");
}
function domDocument(){

}
function domEvents(){
    document.getElementById("boton").addEventListener("mouseover",imagenload);
}
function imagenload(){
    document.getElementById("imagen").src = "../media/img/domStyle.PNG";
}

