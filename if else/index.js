const idade = 20;
const possuiTituloEleitor = true;
const estaRegistrado = true;

if (idade >= 18) {
  if (possuiTituloEleitor && estaRegistrado) {
    console.log("Você é elegível para votar.");
  } else {
    console.log("Você não pode votar, pois não está registrado ou não possui título de eleitor.");
  }
} else {
  console.log("Você não pode votar, pois é menor de idade.");
}

const ladoA = 3;
const ladoB = 4;
const ladoC = 5;

if (ladoA === ladoB && ladoB === ladoC) {
  console.log("É um triângulo equilátero (todos os lados são iguais).");
} else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
  console.log("É um triângulo isósceles (dois lados são iguais).");
} else {
  console.log("É um triângulo escaleno (todos os lados são diferentes).");
}

const precoDoProduto = 75;
let desconto = 0;

if (precoDoProduto >= 100) {
  desconto = 20;
} else if (precoDoProduto >= 50) {
  desconto = 10;
} else if (precoDoProduto >= 30) {
  desconto = 5;
}

const precoFinal = precoDoProduto - (precoDoProduto * (desconto / 100));
console.log(`Preço final após ${desconto}% de desconto: R$ ${precoFinal.toFixed(2)}`);
