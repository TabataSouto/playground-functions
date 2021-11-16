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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let subAB = Math.abs(lineA - lineB);
  let subAC = Math.abs(lineA - lineC);
  let subBC = Math.abs(lineB - lineC);

  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) return false;
  if (lineA < subBC || lineB < subAC || lineC < subAB) return false;
  return true;
}

// Desafio 13
function hydrate(cups) {
  // seu código aqui
  // referência para expressão \d+: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
  // referência para utilização do match(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
  // referência para utilização parseInt: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
  let numbers = /\d+/g;
  let found = cups.match(numbers);
  let result = 0;

  for (let index = 0; index < found.length; index += 1) {
    result += parseInt(found[index], 10);
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
