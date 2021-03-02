// switch - semelhante ao if e else, porém permite uma outra estrutura para multiplos caminhos

function calculate(number1, operator, number2) {
    let result


    switch (operator) {
        case '+':
            // código para +
            result = number1 + number2
            break
        case '-':
            // código para -
            result = number1 - number2
            break
        case '*':
            // código para *
            result = number1 * number2
            break
        case '/':
            // código para /
            result = number1 / number2
            break
        default:
            // código  padrão
            console.log('não implementado')
            break
    }
    return result
}

console.log(calculate(4, '+', 8))