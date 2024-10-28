let choiceComputer = ["камень", "ножницы", "бумага"];
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

//Запуск самой игры 
function playGame () {
    let humanScore = 0; //счетчик побед пользоватателя
    let computerScore = 0; //счетчик побед компьютера

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
        const humanSelection = () => { return prompt("Ваш выбор из камень, ножницы, бумага:").toLowerCase(); } // получение выбора игрока
        const computerSelection = () => { return choiceComputer[Math.floor(Math.random() * 3)]; } // получение выбора компьютера 

        playRound(humanSelection(), computerSelection());
    }
}

playGame();