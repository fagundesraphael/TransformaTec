//objeto
var pessoa = {
    "nome":"Raphael",
    "idade": 30
}

var tipo = typeof(pessoa)

console.log("Pessoa OBJ: ", tipo)

console.log("Propriedade da pessoa OBJ:", pessoa.nome)

console.log("Objeto Pessoa: ", pessoa)

//string
var pessoa = '{"nome":"Raphael","idade": 30}'

console.log("String pessoa: ", pessoa)

var tipo = typeof(pessoa)

console.log("Pessoa String: ", tipo)

console.log("Propriedade da pessoa String:", pessoa.nome)

//convertendo uma String em objeto JSON

var pessoaObj = JSON.parse(pessoa)

var tipo = typeof(pessoaObj)

console.log("Pessoa Obj: ", tipo)

console.log("Propriedade da pessoa Objeto:", pessoaObj.nome)

console.log("Pessoa Obj parsed: ", pessoaObj)

///convertendo objeto em string

var pessoaObj = {
    "nome":"Raphael",
    "idade": 30
}

var stringPessoa = JSON.stringify(pessoaObj)

console.log("pessoa do tipo:",typeof(pessoaObj))
console.log("pessoa do tipo:",typeof(stringPessoa))