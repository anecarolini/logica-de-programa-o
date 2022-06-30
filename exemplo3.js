let operacao = prompt("Digite uma operação, 1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão")


// operacao está entre 1, 2, 3 e 4

// == igual
// && E
// 

// > maior
// < menor 
// >= maior e igual
// <= menor e igual

// (operacao >= 1) && (operacao <= 4)

/*
if ((operacao >= 1) && (operacao <= 4)) {

    let num1 = Number(prompt("Digite o primeiro valor da operção"))
    let num2 = Number(prompt("Digite o segundo valor da operção"))

    // operação soma
    if (operacao == 1) {
        alert(`O total é: ${num1 + num2}`)
    } else {

        // operação subtração
        if (operacao == 2) {
            alert(`O total é: ${num1 - num2}`)
        } else {

            // operação muçltiplicação
            if (operacao == 3) {
                alert(`O total é: ${num1 * num2}`)
            } else {
                
                // operação divição
                if (operacao == 4) {
                    alert(`O total é: ${num1 / num2}`)
                }
            }
        }
    }

    switch (operacao) {
        case `1`:
            alert(`O total é: ${num1 + num2}`)
            break;
        case `2`:
            alert(`O total é: ${num1 - num2}`)
            break;
        case `3`:
            alert(`O total é: ${num1 * num2}`)
            break;
        case `4`:
            alert(`O total é: ${num1 / num2}`)
            break;
        default:
            alert(`Digite um valor entre 1 e 4!`)
            break;

    }

} else {
    alert(`Digite um valor entre 1 e 4!`)
}*/




    let soma            = (v1,v2) => v1 + v2
    let subtração       = (v1,v2) => v1 - v2
    let Multiplicacao   = (v1,v2) => v1 * v2
    let Divisao         = (v1,v2) => v1 / v2

    let = Number(prompt("Digite o primeiro valor da operção"))
    let = Number(prompt("Digite o segundo valor da operção"))

    switch (operacao) {
        case `1`:  
            alert(`O total é: ${v1 + v2}`)
            break;
        case `2`:
            alert(`O total é: ${v1 - v2}`)
            break;
        case `3`:
            alert(`O total é: ${v1 * v2}`)
            break;
        case `4`:
            alert(`O total é: ${v1 / v2}`)
            break;
        default:
            alert(`Digite um valor entre 1 e 4!`)
            break;
    }