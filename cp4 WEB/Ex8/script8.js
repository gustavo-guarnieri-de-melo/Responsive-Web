// Seleciona os elementos da página
const spanResto = document.getElementById('resto');
const inputNumero = document.getElementById('numero');
const buttonVerificar = document.getElementById('verificar');
const pResultado = document.getElementById('resultado');

// Calcula o resto da divisão entre 17 e 5 e exibe o resultado
const resto = 17 % 5;
spanResto.textContent = resto;

// Verifica se um número é par ou ímpar e exibe o resultado
function parOuImpar() {
  const numero = Number(inputNumero.value);
  if (isNaN(numero)) {
    pResultado.textContent = 'Por favor, digite um número válido.';
  } else if (numero % 2 === 0) {
    pResultado.textContent = numero + ' é par.';
  } else {
    pResultado.textContent = numero + ' é ímpar.';
  }
}

buttonVerificar.addEventListener('click', parOuImpar);
