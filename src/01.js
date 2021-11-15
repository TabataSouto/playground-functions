function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // medida igual a numero

  let sumBC = Math.abs(lineB + lineC);
  let sumAC = Math.abs(lineA + lineC);
  let sumAB = Math.abs(lineA + lineB);

  let subBC = Math.abs(lineB - lineC);
  let subAC = Math.abs(lineA - lineC);
  let subAB = Math.abs(lineA - lineB);

  if ((lineA < sumBC && lineA > subBC) || (lineB < sumAC && lineB > Math.abs(lineA - linhaC)) || (lineC < sumAB && lineC > Math.abs(lineA - linhaB))) {
    return true;
  }
  return false
}


console.log(triangleCheck(10, 14, 8));
