/*document.getElementById('id1').title // Rojo
document.querySelector('#probandoqueryselector .clase').title // Azul
document.querySelector('#probandoqueryselector .clase[title^=L]').title // Lila

// Todos los <span> y <img> de una página
document.querySelectorAll('span, img')
// Todos los <span> hijos de <div>
document.querySelectorAll('div > span')
function estilosSpan(){
// Los 5 <span>
var spanes = document.querySelectorAll('#probandoqueryselector span.clase');
    for (var i=0; i <= spanes.length; i++){
        spanes[i].style.backgroundColor = "black";
        spanes[i].style.color = "white";
        spanes[i].style.border = "solid 2px";
    }

}*/
