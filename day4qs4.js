let num1 = prompt("Enter  the num1")
let num2 = prompt("Enter the num 2")
let op = prompt("Enter the operand")

switch(op){
    case '+':
        console.log(+num1+ +num2)
        break
    case "-":
        console.log(+num1+-num2)
        break
    case '*':
        console.log(+num1 *num2)
        break
    case '/':
        console.log(+num1 /num2)
        break
    case 'math.sqrt':
        console.log(+Math.sqrt(num1))
        break
    case '%':
        console.log((+num1 /num2) * 100)
        break

}