console.log("oi..oi!!")

var inputSalario = document.querySelector("#ganho-mes") //selecionei salario
var inputHoras = document.querySelector("#horas-dia") //selecionei as horas

function calcularValorHora(){ //criei a função
    var salario = inputSalario.valueAsNumber //valor do salario   
    var horas = inputHoras.valueAsNumber // valor das horas
    var resultado = document.querySelector("#resposta")

    var horasMes= horas*22 // multipliquei as horas trabalhadas pelos dias úteins
   
    var valorHora = salario/horasMes //dividiu o salário pela quantidade de horas trabalhadas ao mês)
   
    var valorDuasCasas = valorHora.toFixed(2) //"configurado para 2 casas decimais"
    
    console.log(valorDuasCasas)

    resultado.textContent = "R$ "+ valorDuasCasas //concatenar e converter o resultado
}