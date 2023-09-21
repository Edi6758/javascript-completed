// Exemplo com for
const numerosFor = [1, 2, 3, 4, 5];
for (let i = 0; i < numerosFor.length; i++) {
  console.log("for:", numerosFor[i]);
}

// Exemplo com for...of
const numerosForOf = [1, 2, 3, 4, 5];
for (const numero of numerosForOf) {
  console.log("for...of:", numero);
}

// Exemplo com for...in
const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};
for (const chave in pessoa) {
  console.log("for...in:", `${chave}: ${pessoa[chave]}`);
}

// Exemplo com for
const numerosFor2 = [1, 2, 3, 4, 5];
console.log("Exemplo com for:");
for (let i = 0; i < numerosFor.length; i++) {
  console.log("for:", numerosFor[i]);
}

// Exemplo com for...of
const numerosForOf3 = [1, 2, 3, 4, 5];
console.log("\nExemplo com for...of:");
for (const numero of numerosForOf) {
  console.log("for...of:", numero);
}

// Exemplo com for...in
const pessoa4 = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};
console.log("\nExemplo com for...in:");
for (const chave in pessoa) {
  console.log("for...in:", `${chave}: ${pessoa[chave]}`);
}

