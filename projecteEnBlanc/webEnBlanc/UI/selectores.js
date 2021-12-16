function seleccionSelectores(){
    /*let select;
    select = document.getElementsByTagName('tr');*/
    let selector = document.querySelectorAll('tr[sexo*=mujer]')
    for (let i=0; i <= selector.length; i++){
        selector[i].style.backgroundColor = "#75D860";
    }
    let selectorHombre = document.querySelectorAll('tr[sexo*=hombre]')
    for (let i=0; i <= selectorHombre.length; i++){
        selectorHombre[i].style.backgroundColor = "red";
        selectorHombre[i].style.color = "white";
    }
    
    let selector3 = document.querySelectorAll('*[sexo*="mujer"]')
    for (let i=0; i <= selector3.length; i++){
        selector3[i].style.backgroundColor = "orange";
    }
    //let selector4 = document.querySelectorAll('div[.resultado]')
    //selector4.push("19");
    //let selector5 = document.querySelectorAll('div[.resultado]')
    //selector5.push("19,21");
    let selector6;
}
