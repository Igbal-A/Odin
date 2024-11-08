function calculator () {
    let numberOne;
    let numberTwo;
    let numbers = [];
    let result;
    function pressButtonsNumber () {
        let getNumberOne = document.querySelectorAll(".button__number");
        getNumberOne.forEach((element) => {
            element.addEventListener("click", function () {
                if (numbers.length > 1) {
                    return
                }
                let valueNumber = element.textContent;
                numbers.push(valueNumber);

                console.log(Number(valueNumber));
                console.log(numbers);

                if (numbers.length == 2) {
                    result = document.querySelector(".button__operator_result").addEventListener("click", operationNumbers(numbers));
                }
            })
        })
    }

    function pressButtonsOperators () {
        let valueNumber;
        let getOperator = document.querySelectorAll(".button__operator");
        getOperator.forEach((element) => {
            element.addEventListener("click", function () {
                valueNumber = element.textContent;
                /* console.log(valueNumber); */
            })
        })
        return valueNumber;
    }

    function operationNumbers (number, operators) {
        let number1 = Number(number[0]);
        let number2 = Number(number[1]);

        resultNumbers = number1 + number2;
        console.log(resultNumbers);
    }

/*     result = document.querySelector(".button__operator_result").addEventListener("click", operationNumbers(numbers)); */
    pressButtonsNumber();
    pressButtonsOperators();
    
}
calculator();