$(".resultado").append("<p>Test de resultado</p>");

//querySelectorAll -> Especifiquem les etiquetes css específiques per obtenir el resultat que volem i amb el >td volem dir que ens filtri pels td que siguin fills directament de l'element tr...
let bea = document.querySelectorAll("tr[sexo=mujer]>td");
let aitor = document.querySelectorAll("tr[sexo=hombre]>td");

//D'aquesta manera, obtenim la referència al div i amb la variable bea, la qual és un array,  ja que tenim més d'un element que compleixi amb el que hem introduït en el queryselector, podem obtenir amb innerHTML i la posició de l'array, l'edat de la Bea. 
let divRes = document.getElementsByClassName("resultado");
divRes[0].innerHTML = bea[3].innerHTML + ", " + aitor[1].innerHTML;

//RESTAR UN ANY A LES DONES
for (let i = 0; i < bea.length; i++) {
  if (parseInt(bea[i].innerHTML)) {
    let novaEdat = parseInt(bea[i].innerHTML);
    bea[i].innerHTML = novaEdat - 1;
  }
}

//BUSCAR MENORS D'EDAT
let tots = document.querySelectorAll("tr>td");
let menorsEdat = [];

for (let i = 0; i < tots.length; i++) {
  let edat = tots[i].innerHTML;
  if (parseInt(edat)) {
    if (parseInt(edat) < 18) {
      let nomMenor = tots[i - 1].innerHTML;
      menorsEdat.push(nomMenor);
    }
  }
}
divRes[0].innerHTML = "Llista de menors d'edat: " + menorsEdat;

//MODIFICAR MEDIA I ACUM
let totalEdats = 0;
let edat = 0;
for (let i = 0; i < tots.length; i++) {
  edat = tots[i].innerHTML;
  if (parseInt(edat)) {
    totalEdats += parseInt(edat);
  }
}
let element = document.querySelector('[dato="media"]');
element.innerHTML = " " + (totalEdats / (tots.length / 2)).toFixed(2);
let element2 = document.querySelector('[dato="acum"]');
element2.innerHTML = " " + totalEdats;

//AFEGIR UN NOU REGISTRE
let newtr = document.createElement("tr");
newtr.setAttribute("sexo", "hombre");

let newtd1 = document.createElement("td");
let newtd1Content = document.createTextNode("Devin");
newtd1.append(newtd1Content);

let newtd2 = document.createElement("td");
let newtd2Content = document.createTextNode("22");
newtd2.append(newtd2Content);

newtr.appendChild(newtd1);
newtr.appendChild(newtd2);
let currentTable = document.getElementsByTagName("table");

currentTable[0].appendChild(newtr);

//CONCATENAR NOU REGISTRE AMB MEDIA I ACUM
element.innerHTML = " " + ((totalEdats + parseInt(newtd2.innerHTML)) / (tots.length / 2)).toFixed(2);
element2.innerHTML = " " + (totalEdats + parseInt(newtd2.innerHTML));


//MOSTRAR PER CONSOLA EL CONTINGUT DEL DIV EL QUAL L'ID COMENÇA PER JE
let elementJE = document.querySelector('[id^=je]');
if (elementJE != null) {
  //console.log(elementJE.innerHTML);
} else {
  console.log("No hi ha cap element amb un id que comenci per 'je'");
}

//MOSTRAR PER CONSOLA EL CONTINGUT DEL DIV EL QUAL L'ID ACABA PER FE
let elementJE2 = document.querySelector('[id$=fe]');
if (elementJE2 != null) {
  //console.log(elementJE2.innerHTML);
} else {
  console.log("No hi ha cap element amb un id que acabi per 'fe'");
}

//Mostrar una llista dels departaments
let btnDepartaments = document.getElementById("btnLlistaDepartaments");
btnDepartaments.addEventListener('click', mostrarLlistaDepartaments);

function mostrarLlistaDepartaments(){
	let departaments = document.querySelectorAll("tr[data-departament]");
  let llistaDepartaments = document.getElementById("llistaDep");
  llistaDepartaments.innerHTML = '<h3>' + "Llistat de departaments" + '<h3>';
  for(let departament of departaments){
  	llistaDepartaments.innerHTML += departament.children[0].innerHTML + " - " + departament.dataset.departament + '<br>'; 
  }
}


//Mostrar l'antiguitat mitja de les persones de la llista
let btnAntiguitat = document.getElementById("btnMitjaAnys");

btnAntiguitat.addEventListener('click', mostrarMitjaAntiguitat);

function mostrarMitjaAntiguitat(){
	let anys = document.querySelectorAll("tr[data-anyinici]");
	let mitjaAntiguitat = document.getElementById("mitjaAnys");
  mitjaAntiguitat.innerHTML = '<h3>' + "Mitja anys antiguitat" + '</h3>';
  let mitjaAnys = 0;
  for(let any of anys){
  	mitjaAnys += parseInt(any.dataset.anyinici);    
  }
  mitjaAnys = mitjaAnys / anys.length;
  mitjaAntiguitat.innerHTML += mitjaAnys.toFixed(2) + '<br>';
}