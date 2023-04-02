const btnVerificar = document.getElementById("verificar");
const mensagem = document.getElementById("mensagem");

btnVerificar.addEventListener("click", function() {
  const idade = Number(document.getElementById("idade").value);

  if (idade <= 12) {
    mensagem.innerHTML = "Você é uma criança.";
  } else if (idade >= 13 && idade <= 18) {
    mensagem.innerHTML = "Você é um adolescente.";
  } else if (idade >= 19 && idade <= 60) {
    mensagem.innerHTML = "Você é um adulto.";
  } else {
    mensagem.innerHTML = "Você é um idoso.";
  }
});
