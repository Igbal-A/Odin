function calculator () {
    let numbers = [[]];
    let counterNumber = 0;
    let operator = "";
    let display = document.querySelector(".display");
    let divNumbers = document.createElement("div");
    divNumbers.className = "divNumbers";
    divNumbers.textContent = "0";
    display.append(divNumbers);

    function pressButtonsNumber () {
        let getNumberOne = document.querySelectorAll(".button__number");
        getNumberOne.forEach((element) => {
            element.addEventListener("click", function () {
                divNumbers.textContent = ""
                numbers[counterNumber].push(element.textContent);
                divNumbers.textContent = numbers[counterNumber].join("");
                console.log(numbers);
            })
        })
    }

    function pressButtonsOperators () {
        let getOperator = document.querySelectorAll(".button__operator");
        getOperator.forEach((element) => {
            element.addEventListener("click", function () {
                numbers[counterNumber] = numbers[counterNumber].join("");
                counterNumber = 1;
                numbers[counterNumber] = new Array();
                operator = element.textContent
            })
        })
    }

    function operationNumbers (number) {
        document.querySelector(".button__operator_result").addEventListener("click", () => {
            numbers[counterNumber] = numbers[counterNumber].join("");
            console.log(numbers);
            let number1 = Number(number[0]);
            let number2 = Number(number[1]);

            let lengthArray = numbers.length;

            switch (operator) {
                case "+": 
                    divNumbers.textContent = number1 + number2;
                    for (let i = 0; i <= lengthArray; i++) {
                        numbers.pop();
                        console.log(numbers);
                    }
                    counterNumber = 0;
                    operator = "";
                    numbers[counterNumber] = new Array();
                    break;
                case "-":
                    divNumbers.textContent = number1 - number2;
                    for (let i = 0; i <= lengthArray; i++) {
                        numbers.pop();
                        console.log(numbers);
                    }
                    counterNumber = 0;
                    operator = "";
                    numbers[counterNumber] = new Array();
                    break;
                case "*":
                    divNumbers.textContent = number1 * number2;
                    for (let i = 0; i <= lengthArray; i++) {
                        numbers.pop();
                        console.log(numbers);
                    }
                    counterNumber = 0;
                    operator = "";
                    numbers[counterNumber] = new Array();
                    break;
                case "/": 
                    divNumbers.textContent = number1 / number2;
                    for (let i = 0; i <= lengthArray; i++) {
                        numbers.pop();
                        console.log(numbers);
                    }
                    counterNumber = 0;
                    operator = "";
                    numbers[counterNumber] = new Array();
                    break;
            }
        })
    }

    pressButtonsOperators();
    pressButtonsNumber();
    operationNumbers(numbers);

    
}
calculator();