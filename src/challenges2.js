// Desafio 10
function techList(tech, namePeople) {
  // seu código aqui

  // Ordenar o meu array
  let techOrder = tech.sort();
  // Criar uma variável para armazenar a minha lista
  let listObject = [];
  // usar um for of para percorrer elementos dos objetos (valor da propriedade), for in percorre a propriedade
  for (let index of techOrder) {
    listObject.push({ tech: index, name: namePeople });
  }
  if (listObject.length === 0) {
    return 'Vazio!';
  }
  return listObject;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number of phoneNumber) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui

  let subBC = Math.abs(lineB - lineC);

  if (lineA < (lineB + lineC) && lineA > subBC) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(cups) {
  // seu código aqui
  // referência para expressão regular \d+ que orresponde a um ou mais dígitos decimais.: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
  // referência para utilização do match() retorna uma string com apenas os números encontrados na string através da expressão regular: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
  // referência para utilização parseInt para converter a string em um número inteiro: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
  let numbers = /\d+/g;
  let found = cups.match(numbers);
  let result = 0;

  for (let index = 0; index < found.length; index += 1) {
    result += parseInt(found[index], 10); // o 10 é a base decimal, pois o comando precisa da string e da base
  }

  if (result === 1) {
    result += ' copo de água';
  } else {
    result += ' copos de água';
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
