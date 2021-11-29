function seleccionSelectores(){
    let select;
    select = document.getElementsByTagName('tr');
    let selector = document.querySelectorAll('sexo ^=m');
    for (i=0; i <= selector.length; i++){
        selector.backgroundColor = "green";
    }

}
