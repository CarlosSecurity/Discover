// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("node.js")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array - [NÃO MODIFICA O ARRAY]
//console.log(techs.slice(1, 3)) //
// remover 1 ou mais items em qualquer posição do array
techs.splice()
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 3)

console.log(techs)