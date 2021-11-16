// function generatePhoneNumber(arrayPhone) {
//   // seu código aqui
//   let message = '';

//   // parte 1
//   if (arrayPhone.length !== 11) {
//     message = 'Array com tamanho incorreto.';
//   }
//   // parte 2
//   for (let i = 0; i < arrayPhone.length; i += 1) {
//     let repeatFather = 0;
//     let repeat = 0;
//     for (let i2 = 0; i2 < arrayPhone.length; i2 += 1) {
//       if (arrayPhone[i] === arrayPhone[i2]) {
//         repeat += 1;
//       }
//     }
//     if (repeat >= 3) {
//       repeatFather = repeat;
//       message = 'não é possível gerar um número de telefone com esses valores';
//     }
//   }
//   return message;
// }

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
    result += ' copo de agua';
  } else {
    result += ' copos de agua';
  }
  return result;
}

console.log(hydrate('1 copo de cerveja'));
