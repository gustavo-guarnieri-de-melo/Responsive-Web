function somaDivisao(a, b, c) {
  var resultado = (a + b) / c;
  return resultado;
}


const somaDivisaoArrow = (a, b, c) => (a + b) / c;

console.log(somaDivisao(6, 3, 2)); // Saída esperada: 4
console.log(somaDivisaoArrow(6, 3, 2)); // Saída esperada: 4