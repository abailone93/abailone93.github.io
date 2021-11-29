function seleccionSelectores(){
    /*let select;
    select = document.getElementsByTagName('tr');*/
    let selector = document.querySelectorAll('[sexo="mujer"]')
    for (let i=0; i <= selector.length; i++){
        selector[i].style.backgroundColor = "green";
    }
}
