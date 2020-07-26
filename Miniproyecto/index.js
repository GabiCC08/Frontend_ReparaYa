// Declaracion de las variables de la seccion del juego
const palabras = ["condicion", "ordenador", "laurel", "parque", "rueda", "guanabana", "futbol", "eucalipto",
  "chimborazo", "relampago", "jirafa", "luxemburgo", "uruguay", "ilustracion", "excursion", "cariño",
  "pastel", "colegio", "carrera", "mermelada"];
let palabra = ""; //Palabra asignada por el rand
let rand;
const oculta = [];
const hueco = document.getElementById("palabra");
let cont = 6; //Contador intentos
const buttons = document.getElementsByClassName('letra');
const btnInicio = document.getElementById("reset");

//Selecciona una palabra al azar
function generaPalabra() {
  rand = (Math.random() * 20).toFixed(0);
  palabra = palabras[rand].toUpperCase();
}

//Crea el arreglo de guiones bajos
function pintarGuiones(num) {
  for (let i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  console.log(oculta)
  hueco.innerHTML = oculta.join(""); //me escribe en el html la cadena la cual contiene las lineas azules depende de la palabra
}

//Crea el abecedario
function generaABC (a,z) {
  const elemAbc = document.getElementById("abcdario");
  elemAbc.innerHTML="";
  let i = a.charCodeAt(0), j = z.charCodeAt(0);
  let letra = "";
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    elemAbc.innerHTML += "<button value='" + letra +
        "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
    if(i==110) {
      elemAbc.innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
    }
  }
}

//...
function intento(letra) {
  //document.getElementById(letra).disabled = true;
  if(palabra.indexOf(letra) != -1) {
    for(let i=0; i<palabra.length; i++) {
      if(palabra[i]==letra){
        oculta[i] = letra;
      }
    }
    hueco.innerHTML = oculta.join("");
    document.getElementById("acierto").innerHTML = "Correcto!";
    document.getElementById("acierto").className += "acierto verde";
  }else{
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("acierto").innerHTML = "Incorrecto";
    document.getElementById("acierto").className += "acierto rojo";
    document.getElementById("image"+cont).className += "fade-in";
  }
  compruebaFin();
  setTimeout(function () { 
    document.getElementById("acierto").className = ""; 
  }, 750);
}

function cerrar() {
     document.getElementById("segundo").style.display="none";
}

//...
function compruebaFin() {
  let i;
  if( oculta.indexOf("_") == -1 ) {
    document.getElementById("msg-final").innerHTML = "Felicidades !!";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";//className obtine y establece el valor del atributo de la clase del elemento especificado
    for (i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function() { location.reload() };
  }else if( cont == 0 ) {
    document.getElementById("msg-final").innerHTML = "Juego Finalizado";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("dibujo_ahorcado").style.display="none";
    document.getElementById("segundo").style.display="block";

    for (i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true; //Inhabilita los botones
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () { location.reload() };
  }
}

//...
function inicio() {
  generaPalabra();
  pintarGuiones(palabra.length);
  generaABC("a","z");
  cont = 6;
  document.getElementById("intentos").innerHTML=cont;
}
window.onload = inicio();

//--------RULETA--------
const ruleta = document.querySelector("#ruleta");
ruleta.addEventListener("click",girar);
function girar(){
  let rand = Math.random()*7200;
  console.log("Rand de girar"+rand)
  calcular(rand);
}
function calcular(rand){
  valor = rand / 360;
  console.log("Valor1"+valor)
  valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
  console.log("Valor2 (0-360)"+valor)
  ruleta.style.transform = "rotate("+rand+"deg)";
  setTimeout(()=>{
    switch(true){
      case valor > 0 && valor <= 45:
        document.querySelector("#notif").innerHTML = "Tu penintencia es: Hacer 10 sentadillas";
        break;
      case valor > 45 && valor <= 90:
        document.querySelector("#notif").innerHTML = "Tu penintencia es: Hacer 15s de plancha";
        break;
      case valor > 90 && valor <= 135:
        document.querySelector("#notif").innerHTML = "Tu penintencia es: Hacer 10 abdominales";
        break;
      case valor > 135 && valor <= 180:
        document.querySelector("#notif").innerHTML = "Tu penintencia es: Hacer 15 flexiones";
        break;
      case valor > 180 && valor <= 225:
        document.querySelector("#notif").innerHTML = "Tu penintencia es: Hacer 20 sentadillas";
        break;
      case valor > 225 && valor <= 270:
        document.querySelector("#notif").innerHTML = "Tu penintencia es: Hacer 25s de plancha";
        break;
      case valor > 270 && valor <= 315:
        document.querySelector("#notif").innerHTML = "Tu penintencia es: Hacer 20 abdominales";
        break;
      case valor > 315 && valor <= 360:
        document.querySelector("#notif").innerHTML = "Tu penintencia es: Hacer 10 flexiones";
        break;
    }},5000);
}

