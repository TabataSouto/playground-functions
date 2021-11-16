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

function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  let message = '';

  if (phoneNumber.length !== 11) {
    message = 'Array com tamanho incorreto.';
  }
  return message;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));


function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let subAB = Math.abs(lineA - lineB);
  let subAC = Math.abs(lineA - lineC);
  let subBC = Math.abs(lineB - lineC);

  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    return false;
  }
  if (lineA < subBC || lineB < subAC || lineC < subAB) {
    return false;
  }
  return true;
}