let funcionarios = [
    {
      nome: "Anderson",
      idade: 25,
      sexo: "Masculino",
      cargo: "Analista",
      salario: 2500,
      descontos: 1000,
      dataAdmissao: "01-01-2009",
      dataDemissao: "01-01-2010"
    },
    {
      nome: "Ana",
      idade: 38,
      sexo: "Feminino",
      cargo: "Desenvolvedor senior",
      salario: 10000,
      descontos: 3000,
      dataAdmissao: "15-04-2015",
      dataDemissao: "15-04-2022"
    },
    {
      nome: "Marcos",
      idade: 20,
      sexo: "Masculino",
      cargo: "Estagiario",
      salario: 1500,
      descontos: 0,
      dataAdmissao: "08-08-2021",
      dataDemissao: "08-08-2022"
    }
  ];

  let funcionariosAdmitidos = funcionarios.filter(function(funcionario) {
    let dataAdmissao = new Date(funcionario.dataAdmissao);
    return dataAdmissao.getFullYear() >= 2000 && dataAdmissao.getFullYear() <= 2010;
  });

  let funcionariosDemitidos = funcionarios.filter(function(funcionario) {
    let dataDemissao = funcionario.dataDemissao;
    return dataDemissao > '2018';
  });

  funcionariosAdmitidos.forEach(function(funcionario) {
    console.log(funcionario.nome);
    document.write(`Os funcionários a seguir foram contratados entre 2000 e 2010: ${funcionario.nome} <br>`)
  });

  funcionariosDemitidos.forEach(function(funcionario) {
    console.log(funcionario.nome);
    document.write(`Os funcionários a seguir foram dispensados após 2018: ${funcionario.nome} <br>`)
  });

  let dados = funcionarios.map(function(funcionario) {
    return {
      nome: funcionario.nome,
      salario: funcionario.salario,
      desconto: funcionario.descontos
    }
  });
  
  funcionarios.map(function(funcionario) {
    let { nome, salario, descontos } = funcionario;
    console.log(`Nome: ${nome} - Salário: ${salario} - Descontos: ${descontos}`);
    document.write(`Nome: ${nome} - Salário: ${salario} - Descontos: ${descontos}<br>`)
  });

  let totalDescontos = funcionarios.reduce(function(total, funcionario) {
    return total + funcionario.descontos;
  }, 0);
  
  console.log("descontos: " + totalDescontos);
  document.write(`descontos: ${totalDescontos} <br>`)
