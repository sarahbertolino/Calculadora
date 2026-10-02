function calcular(operacao) {
  // Obtém os valores dos campos
  const campo1 = document.getElementById('numero1').value;
  const campo2 = document.getElementById('numero2').value;
  const elementoResultado = document.getElementById('resultado');

  // Verifica se ambos os campos foram preenchidos
  if (campo1 === '' || campo2 === '') {
    elementoResultado.textContent = 'Preencha os dois números!';
    return;
  }

  // Converte o texto para número decimal/negativo
  const num1 = parseFloat(campo1);
  const num2 = parseFloat(campo2);
  let resultado = 0;

  // Realiza o cálculo usando num1 e num2
  switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        elementoResultado.textContent = 'Erro (Divisão por zero)';
        return;
      }
      resultado = num1 / num2;
      break;
  }

  // Exibe o resultado na tela
  elementoResultado.textContent = resultado;
}

function limpar() {
  // Limpa os campos e o resultado
  document.getElementById('numero1').value = '';
  document.getElementById('numero2').value = '';
  document.getElementById('resultado').textContent = '';
}