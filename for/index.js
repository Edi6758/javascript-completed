// Exemplo 1: Loop for simples para contar de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(i); // Imprime os números de 1 a 5
  }
  
  // Exemplo 2: Loop for para iterar por um array
  const frutas = ["maçã", "banana", "laranja", "uva"];
  
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); // Imprime cada elemento do array
  }
  
  // Exemplo 3: Loop for-in para iterar por propriedades de um objeto
  const carro = { marca: "Toyota", modelo: "Corolla", ano: 2022 };
  
  for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`); // Imprime as propriedades e seus valores
  }
  
  // Exemplo 4: Loop for-of para iterar por elementos de um array
  const numeros = [1, 2, 3, 4, 5];
  
  for (const numero of numeros) {
    console.log(numero); // Imprime cada número no array
  }
  
  // Exemplo 5: Loop for com break para interromper a execução
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break; // Interrompe o loop quando i for igual a 5
    }
    console.log(i); // Imprime os números de 1 a 4
  }
  
  // Exemplo 6: Loop for com continue para pular uma iteração
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // Pula a iteração quando i for igual a 3
    }
    console.log(i); // Imprime os números de 1, 2, 4, 5
  }