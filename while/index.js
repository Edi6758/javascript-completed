// Exemplo 1: Adivinhe o Número
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa;
let tentativas = 0;

while (tentativa !== numeroSecreto) {
  tentativa = prompt("Adivinhe o número secreto (entre 1 e 100):");
  tentativa = parseInt(tentativa);
  tentativas++;

  if (tentativa < numeroSecreto) {
    console.log("Tente um número maior.");
  } else if (tentativa > numeroSecreto) {
    console.log("Tente um número menor.");
  }
}

console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);

// Exemplo 2: Contagem Regressiva
let contagem = 10;

while (contagem > 0) {
  console.log(contagem);
  contagem--;
}

console.log("Foguete lançado!");

// Exemplo 3: Repetição de uma Música
let musicaRepeticoes = 3;

while (musicaRepeticoes > 0) {
  console.log("Tocando música...");
  musicaRepeticoes--;
}

console.log("Fim da festa!");

// Exemplo 4: Comida Favorita
let comidaFavorita = "pizza";

while (comidaFavorita !== "sushi") {
  console.log("Ainda não é sushi...");
  comidaFavorita = prompt("Qual é a sua comida favorita?");
}

console.log("Você gosta de sushi também!");
