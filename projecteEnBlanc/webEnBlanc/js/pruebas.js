window.alert("Hola Alert!");
window.prompt("Introduce numero: ");
confirm("pulsa el boton aceptar para continuar");

const d = new Date();
const mesos = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Decembre"];
document.getElementById("demo").innerHTML = mesos[d.getMonth()];

const day = new Date();
document.getElementById("dia").innerHTML = day.getDate();

const hour = new Date();
document.getElementById("hora").innerHTML = hour.getHours();

const mins = new Date();
document.getElementById("minuts").innerHTML = mins.getMinutes();

const secs = new Date();
document.getElementById("segons").innerHTML = secs.getSeconds();

const milsecs = new Date();
document.getElementById("milisegons").innerHTML = milsecs.getMilliseconds();

const weekday = new Date();
document.getElementById("diasemana").innerHTML = weekday.getDay();