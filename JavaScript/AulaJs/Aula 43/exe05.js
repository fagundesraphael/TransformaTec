//asynchronous
async function somar(n1, n2) {

    let soma;

    setTimeout(() => {
        console.log("Após o time out")
    }, 5000)

    soma = n1 + n2;

    return soma


}

async function subtrair(n1, n2) {

    return n1 - n2
}

function multiplicar(n1, n2) {

    return n1 * n2
}

function dividir(n1, n2) {

    return n1 / n2
}


async function calculos() {

    let a = 30
    let b = 10

    var soma = await somar(a, b);

    var subtracao = await subtrair(a, b)

    var multiplicacao = multiplicar(a, b)

    var divisao = dividir(a, b)

    console.log("Soma: ", soma)
    console.log("Subtração: ", subtracao)
    console.log("Multiplicação: ", multiplicacao)
    console.log("Divisão: ", divisao)

}

calculos()