const promessa = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 1000)
    })
}
const segundaFuncao = async () => {
    const valor = await promessa()
    return valor * 2
}
const primeiraFuncao = async () => {
    const valor = await segundaFuncao()
    return valor + 0
}

primeiraFuncao().then(res => {
    console.log(res)
})