function seleccionSelectores(){
    /*let select;
    select = document.getElementsByTagName('tr');*/
    let selector = document.querySelectorAll('tr[sexo*="mujer"]')
    for (let i=0; i <= selector.length; i++){
        selector[i].style.backgroundColor = "#75D860";
    }

    let selector2 = document.querySelectorAll('tr[sexo="hombre"]')
    for (let i=0; i <= selector2.length; i++){
        selector2[i].style.backgroundColor = "red";
        selector2[i].style.color = "white";
    }
}
