let pregunta = prompt("Escribe una frase")
let numeroVocales = pregunta.replace(/a|e|i|o|u/gi, "");

const contadorVocales = pregunta.length - numeroVocales.length

alert("Aparecen las vocales: " + contadorVocales ) 