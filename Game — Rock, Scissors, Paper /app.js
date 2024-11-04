//Запуск самой игры 
function playGame () {
    let resultGame = document.querySelector(".result");
    let showTitleUser = document.querySelector(".choosePlayer");
    let showTitleComp = document.querySelector(".chooseComputer");
    let scoreHuman = document.querySelector(".scoreHuman");
    let scoreComp = document.querySelector(".scoreComp");
    let restartGame = document.querySelector(".restart");
    let buttons = document.querySelectorAll("button");
    
    let winner = ``;
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
        function playerSelection () {
            let answerUser = "";
        
            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    answerUser = button.textContent;
                    let computerSelection = getComputerChoice();
                    
                    if (humanScore < 5 && computerScore < 5) 
                        playRound(answerUser.toLowerCase(), computerSelection);

                })
            });

                function reStart () {
                    humanScore = 0;
                    computerScore = 0;
                
                    resultGame.innerHTML = "Результат: ";
                    showTitleUser.innerHTML = "Выбор игрока: ";
                    showTitleComp.innerHTML = "Выбор компьютера: ";
                    scoreHuman.innerHTML = "Счет игрока: 0";
                    scoreComp.innerHTML = "Счет компьютера: 0";
                }

            restartGame.addEventListener("click", reStart);
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
            
                resultGame.innerHTML = "Результат: Вы выиграли, Ваш выбор:" + humanChoice + ", Выбор компьютера: " + computerChoice;
                showTitleUser.innerHTML = "Выбор игрока: " + humanChoice;
                showTitleComp.innerHTML = "Выбор компьютера: " + computerChoice;
                scoreHuman.innerHTML = "Счет игрока: " + humanScore;
                scoreComp.innerHTML = "Счет компьютера: " + computerScore;

                if (humanScore == 5) {
                    winner = "Победитель: Игрок";
                    alert(winner);
                }
                return
            }
        
            if (checkHumanChoice < checkComputerChoice){
                computerScore += 1;
            
                resultGame.innerHTML = "Результат: Вы проиграли, Ваш выбор:" + humanChoice + ", Выбор компьютера: " + computerChoice;
                showTitleUser.innerHTML = "Выбор игрока: " + humanChoice;
                showTitleComp.innerHTML = "Выбор компьютера: " + computerChoice;
                scoreHuman.innerHTML = "Счет игрока: " + humanScore;
                scoreComp.innerHTML = "Счет компьютера: " + computerScore;

                if (computerScore == 5) {
                    winner = "Победитель: Компьютер";
                    alert(winner);
                }
                return
            }

            resultGame.innerHTML = "Результат: Ничья, Ваш выбор:" + humanChoice + ", Выбор компьютера: " + computerChoice;
            showTitleUser.innerHTML = "Выбор игрока: " + humanChoice;
            showTitleComp.innerHTML = "Выбор компьютера: " + computerChoice;
            scoreHuman.innerHTML = "Счет игрока: " + humanScore;
            scoreComp.innerHTML = "Счет компьютера: " + computerScore;
        }
    
    playerSelection();
}

playGame();