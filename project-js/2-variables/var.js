console.log("> existe x antes do bloco?", x) // Output: undefined (O JS declara a variável mas não inicializa) => Hoisting (elevação)
{
    var x = 0
}
console.log("> existe x depois do block?", x)
