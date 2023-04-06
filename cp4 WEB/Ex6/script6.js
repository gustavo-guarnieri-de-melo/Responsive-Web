const form = document.querySelector('form');
const message = document.getElementById('message');
      
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === '1234') {
      message.innerText = 'Login realizado com sucesso!';
      message.style.color = 'green';
    } else {
      message.innerText = 'Falha de autenticação. Verifique seu usuário e senha.';
      message.style.color = 'red';
    }
});