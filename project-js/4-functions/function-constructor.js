/*
    Function() constructor

    * expressão new
    * criar um objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + ' está andando'
    }
}

const carlos = new Person('Carlos')
const elisa = new Person('Elisa')
console.log(carlos)
console.log(elisa.walk())