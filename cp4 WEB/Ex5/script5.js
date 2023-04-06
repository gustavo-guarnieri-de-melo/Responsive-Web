const calcularMedia = () => {
    const notas = document.querySelectorAll('input[type="number"]');
    const notasArray = Array.from(notas);
    
    const notasValores = notasArray.map((nota) => Number(nota.value));
  
    const somaNotas = notasValores.reduce((total, nota) => total + nota, 0);
    const media = somaNotas / notasValores.length;
  
    const resultado = document.getElementById('resultado');
    if (media >= 6) {
      resultado.innerText = `Sua média foi ${media.toFixed(1)}. Parabéns, você foi aprovado(a)!`;
    } else {
      resultado.innerText = `Sua média foi ${media.toFixed(1)}. Infelizmente você foi reprovado(a).`;
    }
  };
  
  const botaoCalcular = document.getElementById('calcular');
  botaoCalcular.addEventListener('click', calcularMedia);
  