let x = -1

try {
    if (x > 0 && x < 10)
        console.log("Done")
    else {
        throw "Erro"
    }

} catch (error) {
    console.log(error)
}