var Frutas = ["Apple", "Banana", "Cherry"];

var Frutas2 = [];

for (var i = Frutas.length - 1; i >= 0; i--) {
  Frutas2.push(Frutas[i]);
}

console.log("Vetor Original:", Frutas);
console.log("Vetor com Palavras Invertidas:", Frutas2);