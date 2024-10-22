//variáveis de entrada
var entradaAtual = "";
var operadorAtual = "";
var valorAtual = 0;
//variável que transforma o componente tela em objeto JavaScript
var tela = document.getElementById("tela");

//função que adiciona os valores a tela da calculadora
function adicionarNumero(numero) {
    entradaAtual = entradaAtual + numero;
    tela.value = entradaAtual;
}

//função que adiciona os separadores decimais na tela da calculadora
function adicionarDecimal() {
    if (!entradaAtual.includes(".")) {
        entradaAtual = entradaAtual + ".";
        tela.value = entradaAtual;
    }
}

//função responsável por limpar a tela
function limparTela() {
    entradaAtual = "";
    operadorAtual = "";
    valorAtual = 0;
    tela.value = "";
}

//função que lê o operador aritmético escolhido
function realizarOperacao(operador) {
    if (entradaAtual !== "") {
        if (operadorAtual !== "") {
            calcular();
        }
        operadorAtual = operador;
        valorAtual = parseFloat(entradaAtual);
        entradaAtual = "";
    }
}

//função que verifica o operador aritmético escolhido e realiza a operação
function calcular() {
    if (entradaAtual !== "") {
        switch (operadorAtual) {
            case "+":
            valorAtual = valorAtual + parseFloat(entradaAtual);
            break;
            case "-":
            valorAtual = valorAtual - parseFloat(entradaAtual);
            break;
            case "*":
            valorAtual = valorAtual * parseFloat(entradaAtual);
            break;
            case "/":
            valorAtual = valorAtual / parseFloat(entradaAtual);
            break;
        }
        entradaAtual = valorAtual.toString();
        operadorAtual = "";
        tela.value = entradaAtual;
    }
}

//função responsável por calcular a porcentagem do valor
function calcularPorcentagem() {
    if (entradaAtual !== "") {
        valorAtual = parseFloat(entradaAtual) / 100;
        entradaAtual = valorAtual.toString();
        tela.value = entradaAtual;
    }
}

//função responsável por calcular a raiz quadrada do valor
function calcularRaizQuadrada() {
    if (entradaAtual !== "") {
        //o comando MATH.sqrt e MATH.pow é uma função da biblioteca MATH (matemática), realiza o cálculo automático
        valorAtual = Math.sqrt(parseFloat(entradaAtual));
        
        entradaAtual = valorAtual.toString();
        tela.value = entradaAtual;
    }
}