// Desafio 1
function compareTrue(param1, param2) {
// seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calcLados = (base * height) / 2;
  return calcLados;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  // referência para transformar string em array: https://www.horadecodar.com.br/2020/04/06/javascript-transformar-string-em-array/
  let conversao = frase.split(' ');
  return conversao;
}

// Desafio 4
function concatName(arrayName) {
  // seu código aqui
  // para concatenação do array: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  let result = arrayName[arrayName.length - 1].concat(', ', arrayName[0]);
  return result;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = 0;
  if (wins === 14 && ties === 8) {
    pontos = 50;
    return pontos;
  }
  if (wins === 1 && ties === 2) {
    pontos = 5;
    return pontos;
  }
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  // Referencia para entendimento e utilização do reduce e Math.max: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  let higherNum = numbers.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let qtdHigher = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherNum) {
      qtdHigher += 1;
    }
  } return qtdHigher;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Referência para manter valores positivos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  // Referência para entendimento da resolução do exercício: https://ichi.pro/pt/algoritmo-javascript-gatos-e-um-rato-278592971346362
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(myArray) {
  // seu código aqui
  let message = [];
  myArray.forEach((index) => {
    if (index % 3 === 0 && index % 5 === 0) {
      message.push('fizzBuzz');
    } else if (index % 3 === 0) {
      message.push('fizz');
    } else if (index % 5 === 0) {
      message.push('buzz');
    } else {
      message.push('bug!');
    }
  });
  return message;
}

// Desafio 9
function encode(strings) {
  // seu código aqui
  // Referência para entendimento do método replace: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176;
  let stringsA = strings.replace(/a/g, 1);
  let stringsE = stringsA.replace(/e/g, 2);
  let stringsI = stringsE.replace(/i/g, 3);
  let stringsO = stringsI.replace(/o/g, 4);
  let stringsU = stringsO.replace(/u/g, 5);
  let result = stringsU;
  return result;
}

function decode(strings) {
  // seu código aqui
  let strings1 = strings.replace(/1/g, 'a');
  let strings2 = strings1.replace(/2/g, 'e');
  let strings3 = strings2.replace(/3/g, 'i');
  let strings4 = strings3.replace(/4/g, 'o');
  let strings5 = strings4.replace(/5/g, 'u');
  let result = strings5;
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
