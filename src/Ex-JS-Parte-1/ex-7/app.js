let text = prompt("Escribe una frase");
let caracterA = "a"
let contadorLetras = 0


for (let i = 0; i < text.length; i++){
    if(text.charAt(i) === caracterA) {
        contadorLetras++;
    }
}
console.log("Aparece" + contadorLetras + " veces la letra" + " a "     )
