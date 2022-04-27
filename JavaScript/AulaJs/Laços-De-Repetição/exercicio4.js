let usuarios = [{
    nome: "Cassiano",
    sobrenome: "Peres",
    idade: "32",
    email: "cassiano@tranformatec.com"
}, {
    nome: "Joao",
    sobrenome: "Mauro",
    idade: "26",
    email: "joao@tranformatec.com"
}, {
    nome: "Arthur",
    sobrenome: "Da DIO",
    idade: "22",
    email: "arthur@tranformatec.com"
}]; //pega um objeto "usuário" dentro de um array de objetos

for (const usuario of usuarios) {
     //pega uma propriedade contida dentro do objeto chamado usuário
    for (const propriedade in usuario) {
        console.log(usuario[propriedade])
    }
}