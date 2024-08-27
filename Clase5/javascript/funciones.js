function saludar(){
    console.log("HOLA");
}

saludar();


function saludarConParametros(nombre){
    console.log("HOLA " + nombre);
}

saludarConParametros("PANCHO");
saludarConParametros("JAVIER");
saludarConParametros("Todas");

function sumar(a, b){
    return a + b;
}

var sumaResultado = sumar(10,5)
console.log(sumaResultado)

function fabricaDeZapatos(color, material){
    var zapato = "El zapatato es de color " + color + " y es de material " + material;
    return zapato;
}

var zapato1 = fabricaDeZapatos("azul", "plastico");
console.log(zapato1);

var zapato2 = fabricaDeZapatos("rojo", "cuero");
console.log(zapato2);
