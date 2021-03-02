// if...else

let temperature = 38

if(temperature >= 37.5) {
    console.log('*Alerta - Febre Alta*')
} else if(temperature < 37.5 && temperature >= 37) {
    console.log('*Alerta - Febre Baixa*')
} else {
    console.log('[Temperatura Normal]')
}

/* Dicas e Pontos de Atenção */
// if quando só tem uma linha de códigos
if(temperature > 39)
    console.log("*ALTO RISCO DE VIDA*")


// Transformar as condicionais em variáveis que as traduzam
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

// Podemos usar booleanos para sempre executar o bloco
if(true) {"..."}
