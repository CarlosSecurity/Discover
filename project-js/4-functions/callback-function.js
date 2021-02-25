// Callback Function - Chamar de volta

function sayMyName(name) {
    console.log('Antes de Executar a callback')
    name()
    console.log('Depois de Executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)