new Promise((resolve, rejeita) => {
    let a = 10;
    let b = 20;

    resolve(a + b)
    rejeita()

    //A promessa retornou o resultado
}).then(
    function (res) {
        console.log(res)

        // Chamado em caso de sucesso do primeiro then
    }).then(
    function () {
        console.log("c")

        // Chamado em caso de sucesso do segundo then
    }).then(
    function () {
        console.log("O segundo then funcionou")

        //captura erro
    }).catch((erro) => {
    console.log(erro)
})