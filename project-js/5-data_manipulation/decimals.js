// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 334.33452345
console.log(Number(number.toFixed().replace('.', ','))) // Error: NaN - Not a Number

//Maneira correta
console.log(number.toFixed(2).replace('.', ','))