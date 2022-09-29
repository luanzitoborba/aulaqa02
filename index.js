function dolarParaReais(valor) {
    return valor * 5.10;
}


module.exports = {dolarParaReais}

function maiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}


module.exports = {maiorNumero}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}


module.exports = {fahrenheitParaCelsius}

function bilheteria(quantidade_ingressos,valor_ingresso,valor_total) {
   
    valor_total = valor_ingresso * quantidade_ingressos;
     
}


module.exports = {bilheteria}