var text = '';

for (let i = 0; i < 5; i++) {
    console.log('el numero de i es: ', i);
    text += "<li>The number is " + i + "</li>";
}
console.log("text: ", text)

//-------- FOR TRADICIONAL CON USO DE INDICE E INCREMENTO MANUAL

var vehiculos = ["auto", "moto", "bici"];
//                  0       1       2

var html = '';
for (let indice = 0; indice < vehiculos.length; indice++) {
    html += '<li>' + vehiculos[indice] + '</li>';
}
console.log("html: ", html)

//-------- FOR IN
var vehiculos = ["auto", "moto", "bici"];
//                  0       1       2
var html = '';
for (var indice in vehiculos){
    html += '<li>' + vehiculos[indice] + '</li>';
}
console.log("html: ", html)

//-------- FOR OF
var vehiculos = ["auto", "moto", "bici"];
//                  0       1       2
var html = '';
for (var vehiculo of vehiculos){
    html += '<li>' + vehiculo + '</li>';
}
console.log("html: ", html)

var objeto = {
    "nombre": "Francisco",
    "apellido": "Boisier",
}

for (var key in objeto) {
    console.log(`Key: ${key}, Valor: ${objeto[key]}`);
}

