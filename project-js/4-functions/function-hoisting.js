// Function Hoisting

sayMyName1()

function sayMyName1() {
    console.log('Carlos')
}

// Function expression/anonymous não sofrem hoisting

sayMyName2()

const sayMyName2 = function () {
    console.log('Carlos de novo')
}
