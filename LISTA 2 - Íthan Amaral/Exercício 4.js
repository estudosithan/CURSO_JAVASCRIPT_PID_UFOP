console.log('Hello, world!');
const readline=require('prompt-sync')
const imput=readline()

console.log("Digite o valor do seu salário:")
const salario = parseFloat(imput())
console.log(`O salário antes do reajuste era de: `,salario)

if(salario <= 280.0){
    const aumento = salario * 0.20
    const salario_novo = salario + aumento
    console.log(`O valor do aumento foi de: ${aumento.toFixed(2)}`)
    console.log(`O valor do novo salário é de: ${salario_novo.toFixed(2)}`)
}
else if(salario > 280.0 && salario <= 700){
    const aumento = salario * 0.15
    const salario_novo = salario + aumento
    console.log(`O valor do aumento foi de: ${aumento.toFixed(2)}`)
    console.log(`O valor do novo salário é de: ${salario_novo.toFixed(2)}`)
}
else if(salario > 700.0 && salario <= 1500){
    const aumento = salario * 0.10
    const salario_novo = salario + aumento
    console.log(`O valor do aumento foi de: ${aumento.toFixed(2)}`)
    console.log(`O valor do novo salário é de: ${salario_novo.toFixed(2)}`)
}
else if(salario > 1500.0){
    const aumento = salario * 0.05
    const salario_novo = salario + aumento
    console.log(`O valor do aumento foi de: ${aumento.toFixed(2)}`)
    console.log(`O valor do novo salário é de: ${salario_novo.toFixed(2)}`)
}