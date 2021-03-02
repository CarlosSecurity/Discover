/*
    Operadores unários
    typeof
    delete - Procura por determinada propriedade em um objeto e deleta
*/
console.log(typeof 'Carlos')

const person = {
    name: 'Carlos',
    age: 28,
}
delete person.age

console.log(person)