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
const btnInicio = document.getElementById("btnreset");

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
function generaABC(a, z) {
    const elemAbc = document.getElementById("abcdario");
    elemAbc.innerHTML = "";
    let i = a.charCodeAt(0), j = z.charCodeAt(0);
    let letra = "";
    for (; i <= j; i++) {
        letra = String.fromCharCode(i).toUpperCase();
        elemAbc.innerHTML += "<button value='" + letra +
            "' onclick='intento(\"" + letra + "\")' class='letra' id='" + letra + "'>" + letra + "</button>";
        if (i == 110) {
            elemAbc.innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='" + letra + "'>Ñ</button>";
        }
    }
}

//...
function intento(letra) {
    //document.getElementById(letra).disabled = true;
    if (palabra.indexOf(letra) != -1) {
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] == letra) {
                oculta[i] = letra;
            }
        }
        hueco.innerHTML = oculta.join("");
        document.getElementById("acierto").className += "verde";
        document.getElementById("acierto").innerHTML = "Correcto";

    } else {
        cont--;
        document.getElementById("intentos").innerHTML = cont;
        document.getElementById("acierto").className += "rojo";
        document.getElementById("acierto").innerHTML = "Incorrecto";
        document.getElementById("image" + cont).className += "fade-in";
    }
    compruebaFin();
    setTimeout(function () {
        document.getElementById("acierto").className = "";
    }, 750);
}

function cerrar() {
    document.getElementById("segundo").style.display = "none";
}

//...
function compruebaFin() {
    let i;
    if (oculta.indexOf("_") == -1) {
        document.getElementById("msg-final").innerHTML = "FELICIDADES";
        document.getElementById("acierto").innerHTML = "";
        document.getElementById("msg-final").className += "zoom-in";
        document.getElementById("palabra").className += " encuadre";
        for (i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        btnInicio.innerHTML = "Empezar";
        btnInicio.onclick = function () {
            location.reload()
        };
    } else if (cont == 0) {
        document.getElementById("acierto").innerHTML = "";
        document.getElementById("msg-final").innerHTML = "JUEGO FINALIZADO";
        document.getElementById("msg-final").className += "zoom-in";
        document.getElementById("dibujo_ahorcado").style.display = "none";
        document.getElementById("segundo").style.display = "block";

        for (i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true; //Inhabilita los botones
        }
        btnInicio.innerHTML = "Empezar";
        btnInicio.onclick = function () {
            location.reload()
        };
    }
}

//...
function inicio() {
    generaPalabra();
    pintarGuiones(palabra.length);
    generaABC("a", "z");
    cont = 6;
    document.getElementById("intentos").innerHTML = cont;
}

window.onload = inicio();

//--------RULETA--------
const ruleta = document.querySelector("#ruleta");
ruleta.addEventListener("click", girar);

function girar() {
    let rand = Math.random() * 7200;
    console.log("Rand de girar" + rand)
    calcular(rand);
}

function calcular(rand) {
    valor = rand / 360;
    console.log("Valor1" + valor)
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    console.log("Valor2 (0-360)" + valor)
    ruleta.style.transform = "rotate(" + rand + "deg)";
    setTimeout(() => {
        switch (true) {
            case valor > 0 && valor <= 45:
                document.querySelector("#notif").innerHTML = "HAZ 15 SENTADILLAS";
                break;
            case valor > 45 && valor <= 90:
                document.querySelector("#notif").innerHTML = "HAZ 25s DE PLANCHA";
                break;
            case valor > 90 && valor <= 135:
                document.querySelector("#notif").innerHTML = "HAZ 25 ABDOMINALES";
                break;
            case valor > 135 && valor <= 180:
                document.querySelector("#notif").innerHTML = "HAZ 15 FLEXIONES DE PECHO";
                break;
            case valor > 180 && valor <= 225:
                document.querySelector("#notif").innerHTML = "HAZ 20 SENTADILLAS";
                break;
            case valor > 225 && valor <= 270:
                document.querySelector("#notif").innerHTML = "HAZ 40s DE PLANCHA";
                break;
            case valor > 270 && valor <= 315:
                document.querySelector("#notif").innerHTML = "HAZ 20 ABDOMINALES";
                break;
            case valor > 315 && valor <= 360:
                document.querySelector("#notif").innerHTML = "HAZ 10 FLEXIONES DE PECHO";
                break;
        }
    }, 5000);
}

 //----------SELEC JUGADORES-----------
