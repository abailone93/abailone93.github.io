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
/**/
function mediaAcum(){
    let totalEdades = 0;
    let edat = 0;
    for (let i = 0; i < total.length; i++) {
    edat = total[i].innerHTML;
    if (parseInt(edat)) {
        totalEdades += parseInt(edat);
    }
    }
    let med = document.querySelector('[dato="media"]');
    med.innerHTML = " " + (totalEdades / (total.length / 2)).toFixed(2);
    let acu = document.querySelector('[dato="acum"]');
    acu.innerHTML = " " + totalEdades;
    med.innerHTML = " " + ((totalEdades + parseInt(td2.innerHTML))/(total.length / 2)).toFixed(2);
    acu.innerHTML = " " + (totalEdades + parseInt(td2.innerHTML));
}

function afegirRegistre(){
    let tr1 = document.createElement("tr");
    tr1.setAttribute("sexo", "hombre");
    
    let td1 = document.createElement("td");
    let td1Texto = document.createTextNode("Alex");
    td1.append(td1Texto);
    
    let td2 = document.createElement("td");
    let td2Texto = document.createTextNode("22");
    td2.append(td2Texto);
    
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    let Tabla = document.getElementsByTagName("table");
    
    Tabla[0].appendChild(tr1);
}
/*
CONCATENAR

Nuevo Registro con 

MEDIA

Y

ACUM
*/
function consola(){
    let je = document.querySelector('[id^=je]');
    if (je != null) {
        console.log(je.innerHTML);
    } else {
        console.log("No hay ningun elemento id que empiece por 'je', gracias");
    }
    let fe = document.querySelector('[id$=fe]');
    if (fe != null) {
        console.log(fe.innerHTML);
    } else {
        console.log("No hay ningun elemento id que acabe por 'fe', gracias");
    }
}