//Запуск самой игры 
function playGame () {
    let humanScore = 0; 
    let computerScore = 0;
    let toolsGame = ["камень", "ножницы", "бумага"];
    const playRules = {
        "камень" : {
            "камень" :  0,
            "ножницы" : 1,  
            "бумага" : 0, //-1,
         }, 
        "ножницы" : {
            "камень" :  0,//-1,
            "ножницы" : 0,  
            "бумага" : 1,
        }, 
        "бумага" : {
            "камень" :  1,
            "ножницы" : 0, //-1,  
            "бумага" : 0,
        } 
    } 

        //Получаем выбор игрока 
        function getHumanChoice () {
            let answerUser = prompt("Ваш выбор из камень, ножницы, бумага:").toLowerCase(); 
            if (answerUser === toolsGame[0] || answerUser === toolsGame[1] || answerUser === toolsGame[2]) {
                return answerUser;
            } else {
                alert("Введите: камень, ножницы, бумага");
                return getHumanChoice();
            }
        }
    
        //Получаем выбор компьютера
        function getComputerChoice () {
            return toolsGame[Math.floor(Math.random() * 3)];
        }

        //Запуск раунда
        function playRound (humanChoice, computerChoice) {
            let checkHumanChoice = playRules[humanChoice][computerChoice];
            let checkComputerChoice = playRules[computerChoice][humanChoice];

            if (checkHumanChoice > checkComputerChoice) {
                humanScore += 1;
                console.log(`Вы выиграли, Ваш выбор: ${humanChoice}, Выбор компьютера: ${computerChoice}
                                Счет:
                                    Человек: ${humanScore}
                                    Компьютер: ${computerScore}`);
                return
            }

            if (checkHumanChoice === checkComputerChoice){
                console.log(`Ничья, Ваш выбор: ${humanChoice}, Выбор компьютера: ${computerChoice}
                                Счет:
                                    Человек: ${humanScore}
                                    Компьютер: ${computerScore}`);
                return
            }

            computerScore += 1;
            console.log(`Вы проиграли, Ваш выбор: ${humanChoice}, Выбор компьютера: ${computerChoice}
                                Счет:
                                    Человек: ${humanScore}
                                    Компьютер: ${computerScore}`);
        }
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame();