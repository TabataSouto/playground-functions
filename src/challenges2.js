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
//   let message = '';

//   if (numberPhone.length !== 11) {
//     message = 'Array com tamanho incorreto.';
//   }
//   return message;
// }
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
function hydrate(cup) {
  // seu código aqui

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
