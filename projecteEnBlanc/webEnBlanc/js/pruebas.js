window.alert("Hola Alert!");
window.prompt("Introduce numero: ");
confirm("pulsa el boton aceptar para continuar");

const d = new Date();
const mesos = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Decembre"];
document.getElementById("demo").innerHTML = mesos[d.getMonth()];