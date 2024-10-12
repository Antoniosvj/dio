/*
faça um programa que receba a media de um aluno
caso a media seja < 5 imprima 'reprovado
>=5 < 7 'recuperação'
>=7 'aprovado'

exemplo entrada 5.5 saida 'recuperação
*/

// let  media = [-1.5];


//     if (media >=0 && media < 5){
//         console.log('Reprovado')
//     } else if(media >=5 && media <7){
//         console.log('Recuperação')
//     } else if (media >=7 && media <=10){
//         console.log('Aprovado')
//     } else{
//         console.log('Nota invalida')
//     }


/* faça um programa que receba N(quantidade de numeros) e seus respectivos valores
imprima o maior numero par e o menor número impar

ex.: entrada 5
    3
    4
    1
    10
    8

    saída maior par 10
    menor impar: 1
*/
// let N = [5,3,4,1,10,8]

// const rodar = N[0];
// let maiorPar = 0;
// let menorImpar = 0;

// for (let i = 0; i < rodar; i++){
//     const numero = N[i];
//     if(numero%2 ===0 && numero > maiorPar){
//             maiorPar = numero;
//     }else {
//         if(menorImpar === 0){
//             menorImpar = numero;
//         } else if(numero < menorImpar){
//             menorImpar = numero;
//         }
//     }
// }
// console.log(`O maior par é ${maiorPar} e o menor impar é ${menorImpar}`);


/*
    faça um programa que calcule e imprima o salario a ser transferido para um funcionario
    para realizar o calculo reveba o valor bruto do salário eo adicional dos benefícios
    o salario a ser transderido é calculado da seguinte maneira

    valor bruto - percentual do imposto + adição dos benefícios

    para calcular o imposte segue a seguinte aliquota
    de 0 a 1100 = 5%
    de 1100.01 a 2500 = 10%
    maior que 2500 = 15%

    entrada 
        salario 2000
        beneficio 250

    saida 2050
*/

const salario = 2000;
const beneficio = 250;
let imposto = 0;

if (salario >0 && salario <=1100){
    imposto = salario * 0.05;
} else if( salario > 1100 && salario <=2500){
    imposto = salario * 0.1;
} else{
    imposto = salario * 0.15;
};
console.log(`O salário atual é ${salario}\n
    para este salário o imposto descontado será de ${imposto} e\n
    seus benefícios são ${beneficio}, com isso você receberá ${salario+beneficio-imposto}`);