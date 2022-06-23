function addition(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result
}

function subtraction(firstNumber, secondNumber) {
    let result = firstNumber - secondNumber
    return result
}

function multiplication(firstNumber, secondNumber) {
    let result = firstNumber * secondNumber
    return result
}

function division(firstNumber, secondNumber) {
    let result = firstNumber / secondNumber
    return result
}



alert("This is a simple calculator. Click OK to proceed!")

let operation = prompt("What Operation do you want to perform? Select an operation...( + , - , * , / )")
let firstNumber = parseInt(prompt("Input a value"))
let secondNumber = parseInt(prompt("Input a second value"))

if (operation == "+") {

    alert(addition(firstNumber, secondNumber))
    alert("Refresh the page to perform another operation.")

} else if (operation == "-") {

    alert(subtraction(firstNumber, secondNumber))
    alert("Refresh the page to perform another operation.")

} else if (operation == "*") {

    alert(multiplication(firstNumber, secondNumber))
    alert("Refresh the page to perform another operation.")

} else if (operation == "/") {
    
    alert(division(firstNumber, secondNumber))
    alert("Refresh the page to perform another operation.")

} else {

    alert("Invalid Operation choice. Refresh the page to perform another operation.")
}

