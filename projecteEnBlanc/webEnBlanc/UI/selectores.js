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
    //let selector4 = document.querySelectorAll('tr[sexo*=mujer] > td[19]');
    //jQuery('div.resultado').append(jQuery('tr[sexo*=mujer > td[19]'));
    /*
    https://lenguajejs.com/javascript/dom/crear-elementos-dom/ 
    https://lenguajejs.com/javascript/dom/insertar-elementos-dom/
    */
    let divResultado = document.getElementsByClassName("resultado");
    divResultado[0].innerHTML = b[3].innerHTML + ", " + aitor[1].innerHTML;
}
function restarEdatDones(){
    for (let i = 0; i < b.length; i++) {
        if (parseInt(b[i].innerHTML)) {
            let nuevaEdad = parseInt(b[i].innerHTML);
            b[i].innerHTML = nuevaEdad - 1;
        }
    }
}
function menorsEdat(){
    let total = document.querySelectorAll("tr>td");
    let menoresEdad = [];
    for (let i = 0; i < total.length; i++) {
        let edat = total[i].innerHTML;
        if (parseInt(edat)) {
            if (parseInt(edat) < 18) {
            let nombreMenor = total[i - 1].innerHTML;
            menoresEdad.push(nombreMenor);
            }
        }
    }
    divResultado[0].innerHTML = "Llista de menors: " + menoresEdad;
}