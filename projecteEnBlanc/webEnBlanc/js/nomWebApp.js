/*function ClasMoto(){
    class Moto{
        constructor(modelo,precio){
            this.modelo=modelo;
            this.precio=precio;
        }
    }
    const myMoto = new Moto("Ducati",5000);
    document.getElementById("m").innerHTML =
    myMoto.name + " " + myMoto.year;
}*/
/*console.log("Holaaaaaaaaaa");
window.alert("Hola, bienvenido gran y respetado cliente!");
confirm("pulsa el boton aceptar para continuar");
var numero;
numero = prompt("Introduce numero: ");
var resultado = 11 + numero;

var resul = document.getElementById("pruebain");
resul.innerHTML = resultado;
function cambiocolor(){
    /*document.write(11 + 6);*//*
    resultado.syle.color="blue";
}*/
/*-------------------------------------------------------------------*/

/*window.alert("Hola respetado cliente!");
var nombre=prompt("Introduzca su nombre: ");
document.getElementById("pruebain").innerHTML = nombre;
function validateForm() {
    let mom = document.forms["miFormulario"]["momento"].value;
    let grados = document.forms["miFormulario"]["gradosup"].value;
    if (mom == "" || grados == "") {
      alert("Tienes que escoger alguna opcion");
      return false;
    }
    else{
        var respuesta = "Los datos son correctos, quieres continuar?";
        respuesta=confirm("Los datos son correctos, quieres continuar?");
    
        if(respuesta==true || respuesta==true || respuesta==true){
            
        }
        else{
            alert("Ha sido un placer, noble cliente");
            return false;
        }

    }
}*/
/*------------------------------------------------------*/

/*Persona edat amb sort exercici final píndola*/
/*Incloure concepte de cadascuna de les preguntes és a dir strings,
numbers, arrays i dates*/

//creacio array persona,edat.
const persona = [
    {nom:"Alex", edat:22},
    {nom:"Alba", edat:18},
    {nom:"David", edat:21}
]; 
//truquem funció displayPersona.
displayPersona();
//mostrem el array com està fet al programa.
function displayPersona() {
    document.getElementById("demo").innerHTML =
    persona[0].nom + " " + persona[0].edat + "<br>" +
    persona[1].nom + " " + persona[1].edat + "<br>" +
    persona[2].nom + " " + persona[2].edat;
};
//funció que ordena el nom
function myFunction() {
    persona.sort(function(a, b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    })
};
//funció que ordena per la edat
function personaEdat(){
    persona.sort(function(a, b){return a.edat - b.edat});
};
