//********************** INICIO Función de encriptación  *************************
/*primero identificamos el boton que encripta y el que ejecutara la funcion encriptar*/
document.getElementById("encripta").onclick = function() {
    funEncriptar();
};

function funEncriptar() {
    var claveEncriptacion = "chupalPerro";//aqui indico a la libreria Crypto.js la clave con la que trabajaremos
    var mensaje = document.getElementById("inputCifrar").value; //identifico el contenido de la caja de texto

    // Encripta el mensaje
    var mensajeEncriptado = CryptoJS.AES.encrypt(mensaje, claveEncriptacion).toString(); // encripto el mensaje con a funcion encrypt de crypto.js
    
    // Muestra el mensaje encriptado
    document.getElementById("outputTextoFinal").value = mensajeEncriptado;//opcional muestro un mensaje/alerta
}

//fin encriptar

//***************** Función de desencriptación *********************************
document.getElementById("desencriptar").onclick = function() {
    funDesencriptar();
};

function funDesencriptar() {
    var claveEncriptacion = "chupalPerro";//indicamos la clave de encriptacion
    var mensajeEncriptado = document.getElementById("inputCifrar").value;//indicamos de donde obtendremos los datos a encriptar y localizamos el contenedor
    
    // Desencripta el mensaje
    var bytesDesencriptados = CryptoJS.AES.decrypt(mensajeEncriptado, claveEncriptacion);//esta funcion CryptoJS.AES.decrypt se utiliza para descifrar los datos
    var mensajeDesencriptado = bytesDesencriptados.toString(CryptoJS.enc.Utf8);//convertimos esos datos en texto legible
    
    // Muestra el mensaje desencriptado
    document.getElementById("outputTextoFinal").value = mensajeDesencriptado;
}

//**************************** Función de copiado  ******************************
document.getElementById("copiar").onclick = function() {
    funCopiar();
};

function funCopiar() {
    var mensaje = document.getElementById("outputTextoFinal").value;//identifico donde copiare el mensaje

    // Copia el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)//indico que voy a copiar el texto contenido en mensaje (la caja de texto)
        .then(function() {
            alert("Mensaje copiado al portapapeles: " + mensaje);//muestro una alerta con el texto que copie
        })
        .catch(function(error) {
            console.error("Error al copiar el mensaje:", error);//si da error mostrara este texto
        });
}
