/* ### Celsius em Fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/

function ctof(celsius) {
    const fahr = celsius * 9 / 5 + 32
    return fahr
}

function ftoc(fahr) {
    const celsius = (fahr - 32) * 5 / 9
    return celsius
}

function transformDegree(degree) {
    const celsius = (degree.slice(-1) == 'c' || degree.slice(-1) == 'C')
    const fahr = (degree.slice(-1) == 'f' || degree.slice(-1) == 'F')
    const temperature = degree.slice(0, -1)

    if (celsius) {
        return ctof(temperature) + 'F'
    } else if (fahr) {
        return ftoc(temperature) + 'C'
    } else {
        throw new Error(`[${degree.slice(-1)}] - conversão não aceita`)
    }
}

try {
    console.log(transformDegree('50f'))
    console.log(transformDegree('50c'))
    console.log(transformDegree('50Z'))
} catch(e) {
    console.log(e)
}
