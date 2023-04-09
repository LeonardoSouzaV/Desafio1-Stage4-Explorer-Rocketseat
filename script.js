alert(
  "Iremos fazer algumas operações matematicas, forneça dois numeros para o exercicio!"
)

let firstNumber = prompt("Qual ó o primeiro número?")
let secondNumber = prompt("Qual é o segundo número?")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber
let subs = firstNumber - secondNumber
let multi = firstNumber * secondNumber
let divs = firstNumber / secondNumber
let restOfDivs = firstNumber % secondNumber

sum = sum.toFixed(2)
subs = subs.toFixed(2)
multi = multi.toFixed(2)
divs = divs.toFixed(2)
restOfDivs = restOfDivs.toFixed(2)

alert("A soma dos números informados pelo usuario é de: " + sum)
alert("A subtração dos números informados pelo usuario é de: " + subs)
alert("A mulitiplicação dos números informados pelo usuario é de: " + multi)
alert("A divisão dos números informados pelo usuario é de: " + divs)
alert(
  "O resto da divisão dos números informados pelo usuario é de: " + restOfDivs
)

if (sum % 2 === 0) {
  alert("O numero da soma é par.")
} else if (sum % 2 != 0) {
  alert("O numero da soma é impar.")
}

let sameNumbers = firstNumber == secondNumber
let diferentNumbers = firstNumber != secondNumber

if (sameNumbers) {
  alert("Os numeros informados são iguais!")
} else if (diferentNumbers) {
  alert("Os numermos informados são diferentes")
}
