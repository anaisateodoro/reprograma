//******************Calculadora Freenlancer******************///
// Desafio do workshp realizado no dia 21/02/2021.
// Obrigada Reprograma por mais esta oportunidade!

//1º passo (criar a variável)

var valorHora = document.querySelector("#valor-hora")
var horasPorProjeto = document.querySelector("#horas-projeto")
var resposta = document.querySelector("#resposta")

//2º passo (criar a função)

function calcular() {
    var total = valorHora.valueAsNumber * horasPorProjeto.valueAsNumber
    console.log(total)
    resposta.textContent = "R$" + total.toFixed(2) //concatenar e converter o resultado
}