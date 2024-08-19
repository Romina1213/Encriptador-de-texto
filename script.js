function asignar(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function encriptar() {
    let textarea = document.getElementById('textoUsuario');
    let text = textarea.value.trim();
    if (text === "") {
        alert("Debes ingresar un texto");
    }  else {
        let textoUsuario = document.getElementById('textoUsuario').value;
        let textoCifrado = textoUsuario
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        asignar('#textoRespuesta', textoCifrado);
        document.getElementById("mensajeUno").style.display = "none";
        document.getElementById("mensajeDos").style.display = "none";
        document.getElementById("muneco").style.display = "none";
    }
}
function desencriptar() {
    let textarea = document.getElementById('textoUsuario');
    let text = textarea.value.trim();

    if (text === "") {
        alert('¡Ooops! Debes ingresar un texto');
    } else {
        let textoUsuario = document.getElementById('textoUsuario').value;
        let textoCifrado = textoUsuario
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");    
        asignar('#textoRespuesta', textoCifrado);
        document.getElementById("muneco").style.display = "none";
    }
}
function copiarTexto() {
    let boton = document.getElementById("textoRespuesta");
    boton.select();
    boton.setSelectionRange(0,999999);
    navigator.clipboard.writeText(boton.value);
}