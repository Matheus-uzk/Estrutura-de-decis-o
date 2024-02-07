const escolha = 'café';

let valor;

switch (escolha.toLowerCase()) {
  case 'café':
    valor = 2.50;
    break;
  case 'leite':
    valor = 3.00;
    break;
  case 'chá':
    valor = 2.00;
    break;
  default:
    console.log('Escolha inválida. Por favor, selecione entre café, leite ou chá.');
}

if (valor !== undefined) {
  console.log(`Você escolheu ${escolha} e o valor a ser pago é R$ ${valor.toFixed(2)}.`);
}
