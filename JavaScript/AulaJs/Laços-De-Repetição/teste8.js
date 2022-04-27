let carrosObj = [{
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
}, {
    marca: 'chevrolet',
    modelo: 'Onix',
    cor: 'prata',
}, {
    marca: 'fiat',
    modelo: 'marea bomba',
    cor: 'prata',
}];
carrosObj
for (let carro of carrosObj) {
    console.log(carro.cor);
    for (propriedade in carro) {
        console.log(propriedade + ":" + carro[propriedade]);
    }
}