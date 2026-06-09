function calcularDesconto(preco, desconto) {
   let valor = parseFloat(preco);
   let descontoValor = valor * (desconto / 100);
   let precoFinal = valor - descontoValor;
   return precoFinal.toFixed(2);
}

let precoProduto = "100.00";
let descontoProduto = "15";
let precoComDesconto = calcularDesconto(precoProduto, descontoProduto);
console.log(`O preço final com desconto é: R$ ${precoComDesconto}`);
