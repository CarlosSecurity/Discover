// Manipulando String e Números

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // Recebe como parâmetro onde deve ser separado, no caso, sempre que um espaço em branco for encontrado.
console.log(myArray)

let phraseWithUnderscore = myArray.join("_") // Agrupa os elementos do array em uma string, colocando um underscore entre os elementos.
console.log(phraseWithUnderscore)