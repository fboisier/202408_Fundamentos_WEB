

//  ==  igual
//  ===  estrictamente igual
//  !=   diferente
//  !==  estrictamente diferente
//  <    menor que
//  >    mayor que
//  <=   menor o igual que
//  >=   mayor o igual que

// &&  y  todo tiene que ser verdadero para que sea verdadero
// ||  o al menos uno tiene que ser verdadero para que sea verdadero.

var numeroA = 10;
var numeroB = 20;

if ( numeroA > numeroB ){
    console.log("numeroA es mayor que numeroB");
} else {
    console.log("numeroB es mayor que numeroA");
}

var textoNumero = "10";
var numero = 10;

if ( textoNumero === numero ){
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

if (1 != 2){
    console.log("1 es diferente de 2");
}

var numeroA = 1 ;

if (numeroA > 5){
    console.log("numeroA es mayor que 5");
} else if ( numeroA > 1 ){
    console.log("numeroA es mayor que 1");
}else
{
    console.log("numeroA es menor o igual que 1");
}


if (1 == 1 && 2 == 2 && 3 == 3){
    console.log("1 es igual a 1 y 2 es igual a 2");
}

var mes = "lolo";

if (mes === "ENERO"){
    console.log("Enero");
} else if (mes === "FEBRERO"){
    console.log("Febrero");
} else if (mes === "MARZO"){
    console.log("Marzo");
} else if (mes === "ABRIL"){
    console.log("Abril");
} else if (mes === "MAYO"){
    console.log("Mayo");
} else if (mes === "JUNIO"){
    console.log("Junio");
} else if (mes === "JULIO"){
    console.log("Julio");
} else if (mes === "AGOSTO"){
    console.log("Agosto");
} else if (mes === "SEPTIEMBRE"){
    console.log("Septiembre");
} else if (mes === "OCTUBRE"){
    console.log("Octubre");
} else if (mes === "NOVIEMBRE"){
    console.log("Noviembre");
} else if (mes === "DICIEMBRE"){
    console.log("Diciembre");
} else {
    console.log("No es un mes");
}

var nombre = "";
if (nombre){
    console.log("Hola " + nombre);
}else{
    console.log("Hola");
}


var numero = 10;

if ( numero % 2 === 0){
    console.log("Es par");
}

if ( numero % 2 !== 0){
    console.log("Es impar");
}
