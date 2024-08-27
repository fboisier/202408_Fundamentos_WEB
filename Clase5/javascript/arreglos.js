
var arreglo = ["texto", 0, true, 58, "Etc..."]
//                 0    1    2    3    4
console.log(arreglo)

var animales = ["Perro", "Gato", "Conejo", "Tigre", "Pez"]
//                  0       1       2         3         4
console.log(animales[1])

animales[3] = "Pajaro"

console.log(animales)
animales.push("Tiburon")
console.log(animales)
animales.pop()
console.log(animales)
console.log(animales.length)
for (var inicio = 0; inicio < animales.length; inicio++){
    console.log(inicio, animales[inicio])
}
