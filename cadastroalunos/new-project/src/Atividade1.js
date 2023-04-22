import React, { useState } from 'react';

const Atividade1 = () => {
  const [alunos, setAlunos] = useState(['', '', '', '', '']);
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados do formulário para o servidor ou manipulá-los de alguma outra forma
    setEndereco('Rua X, Número Y - Bairro Z');
    setAlunos(['', '', '', '', '']);
  };

  const handleChange = (event, index) => {
    const newAlunos = [...alunos];
    newAlunos[index] = event.target.value;
    setAlunos(newAlunos);
  };

  return (
    <div>
      <h1>Atividade 1</h1>
      <form onSubmit={handleSubmit}>
        {alunos.map((aluno, index) => (
          <div key={index}>
            <label htmlFor={`aluno${index}`}>Aluno {index + 1}:</label>
            <input
              type="text"
              id={`aluno${index}`}
              value={aluno}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
        ))}
        <button type="submit">Cadastrar</button>
      </form>
      {endereco && (
        <div>
          <p>Endereço:</p>
          <p>{endereco}</p>
        </div>
      )}
    </div>
  );
};

export default Atividade1;
