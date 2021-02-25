## VARIÁVEIS ## 

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras-reservadas para criar uma variável:
    - var
    - let
    - const

Exemplo:
```js
    // var
    var clima = "Frio" 
    // let
    let tempo = "Nublado"
    // const - não muda de valor durante sua aplicação
    const dia = "Quinta-feira"

    console.log(clima, tempo, dia)
```

O JS é uma linguagem fracamente tipada e dinâmica

* Variáveis não precisam ter um tipo previamente definido

* Podemos mudar o conteúdo da variável

# Scope #

* Escopo determina a visibilidade de alguma variável no JS

# Block Statement #
```js
    // Vamos iniciar um bloco
    {
        // aqui dentro é um bloco e posso colocar qualquer código
    }   // aqui fechamos o bloco
```
O bloco, também criará um novo escopo. Chamamos de 'block-scoped'

# var (Global) #
```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco?',x)
{
    var x = 0
}
console.log('> existe x depois do bloco?', x)
```
# let e const #
```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log("> existe y antes do bloco?", y)
{
    let y = 0
}
console.log("> existe y depois do bloco?", y)