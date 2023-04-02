let escola = {
    curso: ["ADS", "Medicina", "Engenharia"],
    aluno: ["Ana", "Natan", "Anderson"],
    professor: ["Andrew", "Nicolas", "Marcel"],
    turma: ["A", "B", "C"],
    periodo: ["Manhã", "Tarde", "Noite"]
  };

  function alunoEstudando(nomeAluno) {
    console.log(`O Aluno: ${nomeAluno} está estudando`);
    document.write(`O Aluno: ${nomeAluno} está estudando <br>`)
  }
  
  let aluno = "Natan"
  alunoEstudando(aluno)

  let findAluno = escola.aluno.find(function(aluno) {
    return aluno === "Natan";
  });

  console.log(findAluno);
  document.write(`O aluno selecionado foi: ${findAluno}<br>`)