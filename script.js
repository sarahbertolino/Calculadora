function calcular(operacao) {

  const campo1 = document.getElementById('numero1').value;
  const campo2 = document.getElementById('numero2').value;
  const elementoResultado = document.getElementById('resultado');


  if (campo1 === '' || campo2 === '') {
    elementoResultado.textContent = 'Preencha os dois números!';
    return;
  }


  const num1 = parseFloat(campo1);
  const num2 = parseFloat(campo2);
  let resultado = 0;


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


  elementoResultado.textContent = resultado;
}

function limpar() {

  document.getElementById('numero1').value = '';
  document.getElementById('numero2').value = '';
  document.getElementById('resultado').textContent = '';
}