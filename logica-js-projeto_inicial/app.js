// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaIMC(altura, peso) {
  return peso / (altura ** 2);
}
console.log(calculaIMC(1.75, 70)); // 22.86

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero) {
  let resultado = 1;
  for (let index = 2; index <= numero; index += 1) {
    resultado *= index;
  }
  return resultado;
}
console.log(fatorial(5)); // 120

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteDolarParaReal(valorEmDolar) {
  return valorEmDolar * 4.8;
}
console.log(converteDolarParaReal(100)); // 480

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculaAreaEPerimetro(altura, largura) {
  const area = altura * largura;
  const perimetro = 2 * (altura + largura);
  return `Área: ${area} Perímetro: ${perimetro}`;
}
console.log(calculaAreaEPerimetro(5, 10)); // Área: 50 Perímetro: 30

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calculaAreaEPerimetroCirculo(raio) {
  const area = 3.14 * (raio ** 2);
  const perimetro = 2 * 3.14 * raio;
  return `Área: ${area} Perímetro: ${perimetro}`;
}
console.log(calculaAreaEPerimetroCirculo(5)); // Área: 78.5 Perímetro: 31.400000000000002

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
  let resultado = '';
  for (let index = 1; index <= 10; index += 1) {
    resultado += `${numero} x ${index} = ${numero * index}\n`;
  }
  return resultado;
}
console.log(tabuada(5));