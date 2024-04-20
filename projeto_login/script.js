document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var mensagem = document.getElementById("mensagem");

    if(email === 'exemplo@gmail.com' && senha === 'exe321'){
        mensagem.innerText = `Bem vindo ${email}`;
    } else {
        mensagem.innerText = 'Email ou senha inválida, tente novamente';
    }

    mensagem.style.display = 'block';
});
