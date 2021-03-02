// throw (lançar) - se houver algum erro, ele será disparado

function sayMyName(name = '') {
     if (name == '') {
        //throw new Error("Nome é necessário")
        throw 'Nome é obrigatório' // throw para a execução da função
     }
     console.log('depois do erro')
}

// sayMyName() // Uncaught - O erro não foi pego - OBS: Quando a função executa o throw ele interrompe e encerra a aplicação inteira

// console.log('Após a função de erro')


// try...catch (tentar/pegar) Tentaremos executar esse bloco de código
try {
    sayMyName()
} catch (e) { // Caso ocorra algum erro ele pega mas não interrompe a aplicação
    console.log(e)
}

console.log('Após o catch')