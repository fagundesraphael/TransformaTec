//variável "carro" do tipo objeto que possui as propriedades da "marca", "modelo" e "cor"
let carro = {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
}
//obtendo o nome das propriedades
for (propriedade in carro){
    console.log(carro[propriedade]);
}
//resultado "marca", "modelo" e "cor"