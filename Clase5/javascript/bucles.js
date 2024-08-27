
for (var i = 0; i < 9; i++) {
    console.log(i);
}

var siga = true;
var contador = 0;
while (siga) {
    console.log(siga, contador);
    if (contador >= 20){
        siga = false;
    }
    contador += 5
}