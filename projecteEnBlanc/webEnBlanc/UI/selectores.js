function seleccionSelectores(){
    let selector = document.querySelectorAll('tr[sexo*=mujer]')
    for (let i=0; i <= selector.length; i++){
        selector[i].style.backgroundColor = "#75D860";
    }
}
function cambiaHombres(){
    let selectHombre = document.querySelectorAll('tr[sexo*=hombre]')
    for (let m=0; m <= selectHombre.length; m++){
        selectHombre[m].style.backgroundColor = "#FF0000";
        selectHombre[m].style.color = "#FFFFFF";
    }
}   
function orangePush(){
    let selector3 = document.querySelectorAll('*[sexo*=mujer]')
    for (let i=0; i <= selector3.length; i++){
        selector3[i].style.backgroundColor = "orange";
    }
}
function edatBea(){
    let selector4 = document.querySelectorAll('tr[sexo*=mujer] > td[19]');
    jQuery('div.resultado').append(jQuery('tr[sexo*=mujer > td[19]'));
    selector4.insertAdjacentText("afterend","19");
    //jQuery('div.resultado').append('<td>19</td>');
    //let selector5 = document.querySelectorAll('div[.resultado]')
    //selector5.push("19,21");
    //jQuery('tr[sexo*=mujer > td[19]').appendTo('.resultado');
    //let selectorazo;
/*
https://lenguajejs.com/javascript/dom/crear-elementos-dom/ 
https://lenguajejs.com/javascript/dom/insertar-elementos-dom/
*/
}
