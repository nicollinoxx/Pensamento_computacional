document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var mensagem = document.getElementById("mensagem");

    resultado = (peso / (altura * altura));

    mensagem.innerText = `IMC: ${resultado.toFixed(2)}`

    mensagem.style.display = 'block';
});
