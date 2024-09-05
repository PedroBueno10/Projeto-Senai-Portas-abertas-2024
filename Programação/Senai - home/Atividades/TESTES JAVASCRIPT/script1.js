const notas = [7.5, 8.0, 9.5, 6.0, 8.5];

const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const numeroDeNotas = notas.length;
const media = somaNotas / numeroDeNotas;

console.log("Notas dos alunos: " + notas.join(", "));
console.log("Média das notas dos alunos: " + media);
