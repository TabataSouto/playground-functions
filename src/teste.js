function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  // primeiro if aqui
  // primeiro if acima
  let soma = 0;
  // verifica cada item do array repetido
  for (let firstIndex = 0; firstIndex < phoneNumber.length; firstIndex += 1) {
    for (let secondIndex = 0; secondIndex < phoneNumber.length; secondIndex += 1) {
      if (phoneNumber[firstIndex] === phoneNumber[secondIndex]) {
        soma += 1;
        console.log(soma);
      }
    }
  }
  if (soma >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  soma = 0;
}

//console.log(generatePhoneNumber([1, 2, 3, 3, 5, 6, 7, 8, 9, 0, 1]));
