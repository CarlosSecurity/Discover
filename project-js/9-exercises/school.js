/* ### Transformar as notas escolares

Crie um sistema que transforme as notas do sistema
númerico para sistema de notas em caracteres tipo A B C

* de 90 para cima   -   A
* entre 80 - 89     -   B
* entre 70 - 79     -   C
* entre 60 - 69     -   D
* menor que 60      -   F

*/
function getScore(score) {

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score < 90
    let scoreC = score >= 70 && score < 80
    let scoreD = score >= 60 && score < 70
    let scoreF = score >= 0 && score < 60

    if(scoreA) {
        score = 'A'
    }
    else if(scoreB) {
        score = 'B'
    }
    else if(scoreC) {
        score = 'C'
    }
    else if(scoreD) {
        score = 'D'
    }
    else if(scoreF) {
        score = 'F'
    }
    else {
        throw new Error(`[ ERROR:01 - NOTA INVÁLIDA ]`)
    }
    return score
}

// let notas = [80, 77 ,65 , 79, 54, -1, 99, 0, 113] - Teste de Notas erradas
let notas = [80, 77 ,65 , 79, 54, 12, 99, 0, 100]

for(nota of notas) {
    try {
        console.log(getScore(nota))
    } catch(e) {
        console.log(e)
    }
}
