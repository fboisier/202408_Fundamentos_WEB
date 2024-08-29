function saludar(){
    alert("HOLA DESDE EL ARCHIVO JS!")
}

function saludarConParametros(nombre){
    alert("HOLA " + nombre)
}

function saludaConThis(elemento){
    var nombre = elemento.innerText;
    console.dir(elemento)
    alert("HOLA " + nombre)
}

function editar(elemento){
    elemento.innerText = "Esto es editado al DOM"
}

function alternar(elemento, opcion){
    if(opcion === "salir"){
        elemento.innerText = "El mouse salió del H1";
    } else {
        elemento.innerText = "El mouse entró en el H1";
    }
}