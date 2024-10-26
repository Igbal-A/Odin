
let humanScore = 0; //счетчик побед пользоватателя
let computerScore = 0; //счетчик побед компьютера

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

function getComputerChoice (n = 3) {
    let choice = Math.floor(Math.random() * n);
    switch (choice) {
        case 0: 
            return "камень"; 
            break;
        case 1: 
            return "ножницы"; 
            break;
        case 2: 
            return "бумага"; 
            break;
    }
}; // возвращаю ответ компьютера ввиде слова

function getHumanChoice () {
    return prompt("Ваш выбор из камень, ножницы, бумага:").toLowerCase();
} // возвращаю ответ игрока ввиде слова

function playRound (humanChoice, computerChoice) {
    let checkHumanChoice = playRules[humanChoice][computerChoice];
    let checkComputerChoice = playRules[computerChoice][humanChoice];
    if (checkHumanChoice > checkComputerChoice) {
        humanScore += 1;
        console.log(`Вы выиграли, Ваш выбор: ${humanChoice}, Выбор компьютера: ${computerChoice}\nСчет:\n\tЧеловек: ${humanScore} \n\tКомпьютер: ${computerScore}`);
    } else if (checkHumanChoice == checkComputerChoice){
        console.log(`Ничья, Ваш выбор: ${humanChoice}, Выбор компьютера: ${computerChoice}\nСчет:\n\tЧеловек: ${humanScore} \n\tКомпьютер: ${computerScore}`);
    } else {
        computerScore += 1;
        console.log(`Вы проиграли, Ваш выбор: ${humanChoice}, Выбор компьютера: ${computerChoice}\nСчет:\n\tЧеловек: ${humanScore} \n\tКомпьютер: ${computerScore}`);
    }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice(); // получение выбора игрока
        const computerSelection = getComputerChoice(); // получение выбора компьютера 
        playRound(humanSelection, computerSelection);
    }
}

playGame();






