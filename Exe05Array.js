var numeros = [6.78, 9.78, 12.65, 5.67, 16.81];

// Exibindo o quadrado de cada número
console.log("Quadrado de cada número:");
for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i] * numeros[i]);
}
 
// Exibindo a raiz quadrada de cada número
console.log("Raiz quadrada de cada número:");
        for (var i = 0; i < numeros.length; i++) {
            console.log(Math.sqrt(numeros[i]));
        }

// Exibindo apenas o número arredondado para baixo
console.log("Número arredondado para o valor mais baixo:");
for (var i = 0; i < numeros.length; i++) {
    console.log(Math.floor(numeros[i]));
}    

//Exibindo apenas o número arredondado para alto 
console.log("Número arredondado para o valor mais alto:");
for (var i = 0; i < numeros.length; i++) {
    console.log(Math.ceil(numeros[i]));
}

// Exibindo apenas a parte inteira 
console.log("Apenas parte inteira: ");
for (var i = 0; i < numeros.length; i++) {
    console.log(Math.trunc(numeros[i]));
}
