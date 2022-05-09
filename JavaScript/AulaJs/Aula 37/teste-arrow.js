let soma = somatorio(4,2)

//declaração de função convencional
function somatorio(n1,n2){
    return n1 + n2;
}

console.log(soma)

//declaração de função com arrow functions omitindo a palavra de function e a palavra return
let times = (n1,n2) => n1 * n2;


console.log(times(4,2))