//função que faz a criação da promessa
function promessa() {

    //retorno da promessa criada
    return new Promise(
        //método que retorna o valor em caso de sucesso
        resolve => {
            setTimeout(
                //passagem de um valor como parâmetro do método resolve
                () => resolve(10),
                //delay de 3 segundos para retornar
                3000
            )
        })
}

//função que retorna a soma de um valor obtido de uma função de multiplicação
const soma = async () => {

    //variável que recebe o retorno da função de multiplicação
    const valor = await multiplica()

    console.log("Dentro da função de soma")

    //retorna o valor somado a 3
    return valor + 3
}

//função que retorna um valor recebido da promessa multiplicado por 3
const multiplica = async () => {

    // variável que recebe o valor retornado pela promessa
    const valor = await promessa()

    console.log("Dentro da função de multiplicação")

    //retorno do valor multiplicado por três
    return valor * 3
}

//chamada da função de soma
soma().then(

    //função que recebe o resultado da soma e o apresenta

    function (resultado) {
        console.log("Chamando a função de soma")
        console.log(resultado)
    }
).catch(() => {
    console.log("Erro")
})