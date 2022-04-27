/* Criar um menu de opções de serviços de streaming, imprimindo o nome do serviço escolhido
sendo as opções:
a - para Amazon Prime
n - para Netflix
h - para HBO Max
d - para Disney Plus */

var nome = 'Raphael'

console.log(`Olá ${nome} Qual Streaming você gostaria de acessar?`);

var escolha = 'a'

if (escolha == 'a') {
    console.log('Você escolheu a Amazon Prime. Pegue a pipoca e assista seu filme!')
}else if (escolha == 'n') {
    console.log('Você escolheu a Netflix. Pegue a pipoca e assista seu filme!')
}else if (escolha == 'h') {
    console.log('Você escolheu a HBO Max. Pegue a pipoca e assista seu filme!')
}else if(escolha == 'd')
    console.log('Você escolheu a Disney Plus. Pegue a pipoca e assista seu filme!');

    