var usuario = {
    "clave": "valor",
}

var persona = {
    "nombre": "Francisco",
    "edad": 40,
    "pasatiempos": ["programar", "cantar"]
}

var persona1 = {
    "nombre": "Javier",
    "edad": 17,
    "pasatiempos": ["musica", "estudiar"]
}

//console.log(persona["edad"])
//console.log(persona.edad)

persona.edad = 50
//console.log(persona.edad)

//console.log(persona)
//console.log(persona1)

var arregloPersonas = [persona, persona1]
//console.log(arregloPersonas)

for (var i = 0; i < arregloPersonas.length; i++){
    console.log(arregloPersonas[i].nombre)
}