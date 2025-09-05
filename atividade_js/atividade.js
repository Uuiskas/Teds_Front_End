let totalaulas = parseFloat(prompt("Informe o numero de aulas: "))
let totalfaltas = parseFloat(prompt("Informe o numero de faltas do aluno: "))

let presenca = (((totalaulas - totalfaltas) / totalaulas) * 100).toFixed(2);

let notap1 = parseFloat(prompt("Inorme sua primeira nota: "))
let notap2 = parseFloat(prompt("Informe sua segunda nota: "))

let media = (notap1 + notap2)/ 2
let situacaofinal = ""
let novanota = ""


if (presenca < 75){
    situacaofinal = "reprovado por falta"
}

if (media > 7){
    situacaofinal = "Aprovado"
}
    else if((media >=5) && (media<7)){
        situacaofinal = "Recuperação"
        novanota = prompt("Informe a nota da recuperação: ")
        if(novanota >= 5){
            situacaofinal = "Aprovado"
        }
        else{
            situacaofinal = "Reprovado"
        }
        
    }
    else{
        situacaofinal = "Reprovado"
    }


console.log("Total de aulas: " + totalaulas);
console.log("Total de faltas: " + totalfaltas);
console.log("Presença: " + presenca + "%");
console.log("Nota P1: " + notap1);
console.log("Nota P2: " + notap2);
console.log("Média: " + media);
console.log("Nota Recuperação: " + (novanota !== null ? novanota : "Não fez"));
console.log("Situação final: " + situacaofinal);

