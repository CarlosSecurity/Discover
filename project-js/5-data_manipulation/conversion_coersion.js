/* 
    Type Conversion (typecasting) VS Type Coersion

    * Alteração de um tipo de dado para outro tipo
*/

// Type Coersion - O JS força o número 5 a coersão para caractere
console.log('9' + 5) // Resultado: 95 | Ocorre a concatenação após a coersão

// Type Convertion - Typecasting
console.log(Number('9') + 5) // Altera manualmente o tipo de dado realizando assim a soma dos valores
