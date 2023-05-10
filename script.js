

document.getElementById("textarea").style.visibility = "hidden";
document.getElementById("btn-copy").style.visibility = "hidden";
/**Función para quitar la imagen **/
function quitarImagen() {
    document.getElementById("divImagen").style.display = "none";

}



function encriptar() {
    const caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;
    var texto = document.querySelector("#input-texto").value;
    if (texto == "") {
        alert("Lo siento, pero no debe estar vacío.");


    } else if (texto.match(caracteres) != texto.match(caracteres)) {
        alert("El texto no puede contener Mayusculas ni acentos por favor ni caracteres especiales.");
    } else {

        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#input-texto").value;


        document.getElementById("textarea").style.visibility = "visible";
        document.getElementById("btn-copy").style.visibility = "visible";

        quitarImagen();


    }
}






function desencriptar() {

    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;

    document.getElementById("textarea").style.visibility = "visible";
    document.getElementById("btn-copy").style.visibility = "visible";

}



/*COPIAR TEXTO */

function copiarTexto() {
    //Obtenemos el campo de texto.
    var copiar = document.getElementById("textarea");
    //Selecionamos el campo de texto.
    copiar.select();
    copiar.setSelectionRange(0, 99999); //Rango para moviles.
    //Copia aquello que se encuentra dentro del campo de texto.
    navigator.clipboard.writeText(copiar.value);

    //Alerta de validación de la copia del texto.
    alert("Se copio el texto:  " + copiar.value);
    console.log(alert);
}



// asignacion de botones
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.onclick = copiarTexto;
