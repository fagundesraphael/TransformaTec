const promessa = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 10000)
    })
}

const segundaFuncao = async () => {
    const something = await promessa()
    return something + '\nand I watched'
}

const primeiraFuncao = async () => {
    const something = await segundaFuncao()
    return something + '\nand I watched as well'
}

primeiraFuncao().then(res => {
    console.log(res)
})