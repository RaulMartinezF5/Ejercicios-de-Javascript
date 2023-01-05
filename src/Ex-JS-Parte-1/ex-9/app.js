let pregunta = prompt("Escribe una frase")
let cadena = "aAeEiIoOuU son vocales";
let numeroVocales = pregunta.match(/[aeiou]/gi).length;

alert(" Hay " + numeroVocales + " vocales en tu frase") 