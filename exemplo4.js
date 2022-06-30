let numero = prompt("Digite um número para saber se é par ou impar:")

let resultado = numero % 2
/*
if((resultado == 0)){
   alert(`O número ${numero} é Par`)
} else {
    alert(`O número ${numero} e Impar`)
}
*/


// IF TERNÁRIO
//                               condição          ?   ação true  :   ação false
alert(`O numero ${numero} é ${ ((numero % 2) == 0) ?  `   par    `: `  impar  `}`)