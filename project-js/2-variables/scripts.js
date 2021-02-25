function Function1() {
    // Variáveis e tipos de dados
    // declaração or declaration
    var name

    // assignment or atribuição de valores
    name = 'Carlos'

    // que tipo de dado foi colocado na variável
    console.log(typeof name)

    let age, isHuman

    age = 28
    isHuman = true

    // Multiplo argumentos na função
    console.log(name, age, isHuman)

    // Escrita do texto + variáveis

    // concatenando os valores
    console.log('O ' + name + ' tem ' + age + ' anos')

    // interpolando valores com template literals or template strings
    console.log(`O ${name} tem ${age} anos`)
}

function Function2() {
    // Object
    const person = {
        name: 'John',
        age: 30,
        weight: 88.6,
        isAdmin: true
    }

    console.log(`${person.name} tem ${person.age} anos`)
}

function Function3() {
    // Array
    const animals = [
        'Lion',
        'Monkey',
        {
            name: 'Cat',
            age: 3
        }
    ]

    // Acessar valores dentro do Array
    console.log(animals[2].name)
}

function Exercicio() {
    // 1. Declare uma variável de nome weight
    let weight = 66.6

    // 2. Que tipo de dado é a variável acime?
    console.log(typeof weight)

    /* 3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
    */
    let name = 'Carlos'
    let age = 28
    let stars = 21.7
    let isSubscribed = true

    /* 4. A variável student abaixo é deque tipo de dado

       4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

       4.2 Mostre no console a seguinte mensagem:

       <name> de idade <age> e pesa <weight> kg.

       Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
    */
    let student = {};
    console.log(typeof student)

    student = {
        name: 'Carlos',
        age: 28,
        weight: 66.7,
        isSubscribed: true
    }

    console.log(`${student.name} de idade ${student.age} e pesa ${student.weight} kg`)

    /*
        5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
    */
    let students = []

    /*
        6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
    */
    students = [
        student
    ]

    /* 
        7. Coloque no console o valor da posição zero do Array acima
    */
    console.log(students[0])

    /*
        8. Crie um novo student e coloque na posição 1 do Array students
    */
    const new_student = {
        name: 'Elisa',
        age: 21,
        weight: 56.2,
        isSubscribed: true
    }
    students[1] = new_student
    console.log(students)

    /*
        9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

        console.log(a)
        var a = 1
    */
    console.log(a)
    const a = 1
}
// Function1()
// Function2()
// Function3()
Exercicio()
