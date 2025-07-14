// Кнопки вибору елемента
const buttonRock = document.getElementById('rock');
const buttonScissors = document.getElementById('scissors');
const buttonPaper = document.getElementById('paper');

// Блоки вибору елемента гравцем
const rockBlock = document.getElementById('players-rock-block');
const scissorsBlock = document.getElementById('players-scissors-block');
const paperBlock = document.getElementById('players-paper-block');

// Вибір гравця
let playerChoose;
// Кнопка початку гри
const buttonStart = document.getElementById('main__button');

// Вибір каменя, зміна зовнішнього вигляду блоків
buttonRock.addEventListener("click", function (event) {
    rockBlock.classList.toggle('main__choose-block');
	rockBlock.classList.toggle('choosed');
	let containsRock = rockBlock.classList.contains('choosed');
	if (containsRock) {
		
	scissorsBlock.classList.remove('choosed');
	scissorsBlock.classList.add('main__choose-block');
	
	paperBlock.classList.remove('choosed');
	paperBlock.classList.add('main__choose-block');
	
	playerChoose = 1;
	} else {
	playerChoose = 0;
	};
});
// Вибір ножиць, зміна зовнішнього вигляду блоків
buttonScissors.addEventListener("click", function (event) {
    scissorsBlock.classList.toggle('main__choose-block');
	scissorsBlock.classList.toggle('choosed');
	let containsScissors = scissorsBlock.classList.contains('choosed');
	if (containsScissors) {
	rockBlock.classList.remove('choosed');
	rockBlock.classList.add('main__choose-block');
	
	paperBlock.classList.remove('choosed');
	paperBlock.classList.add('main__choose-block');
	
	playerChoose = 2;
	} else {
	playerChoose = 0;
	};
});
// Вибір паперу, зміна зовнішнього вигляду блоків
buttonPaper.addEventListener("click", function (event) {
    paperBlock.classList.toggle('main__choose-block');
	paperBlock.classList.toggle('choosed');
    let containsPaper = paperBlock.classList.contains('choosed');
	if (containsPaper) {
	rockBlock.classList.remove('choosed');
	rockBlock.classList.add('main__choose-block');
	scissorsBlock.classList.remove('choosed');
	scissorsBlock.classList.add('main__choose-block');
	playerChoose = 3;
	} else {
	playerChoose = 0;
	};
});

// Блоки вибору елемента комп'ютером
const rockBlockComputer = document.getElementById('computers-rock-block');
const scissorsBlockComputer = document.getElementById('computers-scissors-block');
const paperBlockComputer = document.getElementById('computers-paper-block');

// Початок гри, випадковий вибір комп'ютера, 
buttonStart.addEventListener("click", function (event) {
// Випадковий вибір комп'ютера
   let computerChoice = (Math.floor(Math.random() * 3) +1);
if (computerChoice === 1) {
   rockBlockComputer.classList.remove('main__choose-block');
   rockBlockComputer.classList.add('choosed');
} else {
   rockBlockComputer.classList.add('main__choose-block');
   rockBlockComputer.classList.remove('choosed');
}
if (computerChoice === 2) {
   scissorsBlockComputer.classList.remove('main__choose-block');
   scissorsBlockComputer.classList.add('choosed');
} else {
   scissorsBlockComputer.classList.add('main__choose-block');
   scissorsBlockComputer.classList.remove('choosed');
}
if (computerChoice === 3) {
   paperBlockComputer.classList.remove('main__choose-block');
   paperBlockComputer.classList.add('choosed');
} else {
   paperBlockComputer.classList.add('main__choose-block');
   paperBlockComputer.classList.remove('choosed');
}
// Змінні результатів гри
let playerVictory = document.querySelector('.result_player-victory');
let computerVictory = document.querySelector('.result_computer-victory');
let noneVictory = document.querySelector('.result_none_victory');
// Змінні рахунку
let playerScore = document.querySelector('.sidebar__your-score');
let computerScore = document.querySelector('.sidebar__computer-score');
// Умови перемоги, поразки або нічиєї
// Гравець виграє і збільшить свій рахунок якщо:
if (playerChoose === 1 && computerChoice === 2 || playerChoose === 3 && computerChoice === 1 || playerChoose === 2 && computerChoice === 3) {
   playerVictory.style.display = "block";
   playerScore.innerHTML ++;
} else {
   playerVictory.style.display = "none";
}
// Комп'ютер виграє і збільшить свій рахунок якщо:
if (playerChoose === 2 && computerChoice === 1 || playerChoose === 3 && computerChoice === 2 || playerChoose === 1 && computerChoice === 3) {
   computerVictory.style.display = "block";
   computerScore.innerHTML ++;
} else {
   computerVictory.style.display = "none";
}
// Буде нічия якщо:
if (playerChoose === computerChoice) {
   console.log("Нічия");
   noneVictory.style.display = "block";
} else {
   noneVictory.style.display = "none";
}
});

