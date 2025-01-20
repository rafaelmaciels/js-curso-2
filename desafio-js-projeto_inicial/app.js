// Criar uma função que exibe "Olá, mundo!" no console.
function saudacaoMundo() {
    console.log("Olá, mundo!");
}
saudacaoMundo()

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudarNome(){
    let nome = prompt('Por favor, digite seu nome:');
    return nome;
}
console.log(`Olá, ${saudarNome()}!`);

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(){
    let numero = parseInt(prompt('Por favor, digite um número:'));
    return numero*2;
}
console.log(`O dobro do número digitado é: ${dobroNumero()}`);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaTresNumeros(){
    let numero1 = parseInt(prompt('Por favor, digite o primeiro número:'));
    let numero2 = parseInt(prompt('Por favor, digite o segundo número:'));
    let numero3 = parseInt(prompt('Por favor, digite o terceiro número:'));
    return (numero1 + numero2 + numero3)/3;
}
console.log(`A média dos números digitados é: ${mediaTresNumeros()}`);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(){
    let numero1 = parseInt(prompt('Por favor, digite o primeiro número:'));
    let numero2 = parseInt(prompt('Por favor, digite o segundo número:'));
    return numero1 > numero2 ? numero1 : numero2;
}
console.log(`O maior número digitado é: ${maiorNumero()}`);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacaoNumero(){
    let numero = parseInt(prompt('Por favor, digite um número:'));
    return numero*numero;
}
console.log(`O número digitado multiplicado por ele mesmo é: ${multiplicacaoNumero()}`);