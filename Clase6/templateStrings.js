//Si existe codigo repetido, quiere decir que puede mejorar. Optimización

var texto = "Esto es un texto."
console.log(texto);

var texto = 'Esto es " un texto.'
console.log(texto);

var texto = "Esto es ' un texto."
console.log(texto);

var texto = "Esto es \" un texto."
console.log(texto);

var texto = `"'Esto sigue funcionado.'"`;
console.log(texto);

var nombre = "Javier"
var texto = "Hola " + nombre + ", como estás?";
console.log(texto);

var nombre = "Javier";
var edad = 40;
var hobbie = "programar";

var texto = "Bienvenido " + nombre + " de edad " + edad + " años que le gusta " + hobbie;
console.log(texto);


//----

var nombre = "Javier";
var edad = 40;
var hobbie = "programar";

var texto = `Bienvenido ${nombre} de edad ${edad} años que le gusta ${hobbie}`;
console.log(texto);


var nombre = "Javier";
var edad = 40;
var hobbie = "programar";

var texto = `
    <div class="card">
        <h1>${nombre}</h1>
        <p>Edad: ${edad}</p>
        <p>Pasatiempos: ${hobbie}</p>
    </div>
`;
console.log(texto);

