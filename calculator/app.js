function calculator () {
    let numbers = [[]];
    let counterNumber = 0;
    let operator = "";
    let checkAC = false;
    let checlEqual = false;
    let display = document.querySelector(".display");
    let divNumbers = document.createElement("div");
    divNumbers.className = "divNumbers";
    divNumbers.textContent = "0";
    display.append(divNumbers);

    function pressButtonsNumber () {
        let getNumberOne = document.querySelectorAll(".button__number");
        getNumberOne.forEach((element) => {
            element.addEventListener("click", function () {
                if (checkAC) {
                    divNumbers.textContent = "";
                    numbers[1] = new Array();
                    numbers[1].push(element.textContent);
                    divNumbers.textContent = numbers[1];
                    console.log(numbers);
                    return
                }
                checlEqual = false;

                divNumbers.textContent = "";
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
                if (element.textContent == "A/C") {
                    divNumbers.textContent = "0";
                    cleanArrayNumbers(numbers);
                    checkAC = false;
                    return
                }

                if (element.textContent == "=") {
                    operationNumbers(numbers);
                    cleanArrayNumbers(numbers);
                    checlEqual = true;
                    checkAC = false;
                    return
                }

                if (numbers.length == 2) {
                    operationNumbers(numbers);
                    numbers[counterNumber].push(divNumbers.textContent);
                    console.log(numbers);
                    return
                }

                if (checlEqual) {
                    return
                }

                numbers[counterNumber] = numbers[counterNumber].join("");
                counterNumber = 1;
                numbers[counterNumber] = new Array();
                operator = element.textContent
            })
        })
    }

    function operationNumbers (number) {
        if (numbers[0] == "" || numbers.length < 2) {
            return
        }
        numbers[counterNumber] = numbers[counterNumber].join("");
        console.log(numbers);
        let number1 = Number(number[0]);
        let number2 = Number(number[1]);


        switch (operator) {
            case "+": 
                divNumbers.textContent = number1 + number2;
                cleanArrayNumbers(numbers);
                break;
            case "-":
                divNumbers.textContent = number1 - number2;
                cleanArrayNumbers(numbers);
                break;
            case "*":
                divNumbers.textContent = number1 * number2;
                cleanArrayNumbers(numbers);
                break;
            case "/": 
                divNumbers.textContent = Math.round(number1 / number2);
                cleanArrayNumbers(numbers);
                break;
        }
        checkAC = true;
    }

    function cleanArrayNumbers (numbers) {
        let lengthArray = numbers.length;
        for (let i = 0; i <= lengthArray; i++) {
            numbers.pop();
            console.log(numbers);
        }
        counterNumber = 0;
        /* operator = ""; */
        numbers[counterNumber] = new Array();
    }

    pressButtonsOperators();
    pressButtonsNumber();
    operationNumbers(numbers);

    
}
calculator();