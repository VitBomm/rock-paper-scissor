let userCore = 0;
let compCore = 0;
const userCore_span = document.getElementById("user-score");
const computerCore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
function converttoWord(text)
{
	if(text=="r") return "Rock";
	if(text=="p") return "Paper";
	return "Scissor";
}
function getComputerChoice()
{
	const choices = ['r','p','s'];
	const Randomnumber = Math.floor(Math.random()*3);
	return choices[Randomnumber];
}
function win(user,computer)
{
	userCore++;
	userCore_span.innerHTML = userCore;
	computerCore_span.innerHTML = compCore;
	const userChoice = document.getElementById(user);
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_div.innerHTML = `${converttoWord(user)}${smallUserWord} beats ${converttoWord(computer)}${smallCompWord} choice You Win !`;
	userChoice.classList.add('green-glow');
	setTimeout(()=> userChoice.classList.remove('green-glow'),1000);
}
function lose(user,computer)
{
	compCore++;
	userCore_span.innerHTML = userCore;
	computerCore_span.innerHTML = compCore;
	const userChoice = document.getElementById(user);
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_div.innerHTML = `${converttoWord(user)}${smallUserWord} lose ${converttoWord(computer)}${smallCompWord} choice You Lose !`;
	userChoice.classList.add('red-glow');
	setTimeout(()=>  userChoice.classList.remove('red-glow'),1000);
}
function draw(user,computer)
{
	userCore_span.innerHTML = userCore;
	computerCore_span.innerHTML = compCore;
	const userChoice = document.getElementById(user);
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_div.innerHTML = `${converttoWord(user)}${smallUserWord} equals ${converttoWord(computer)}${smallCompWord} choice It's a draw !`;
	userChoice.classList.add('gray-glow');
	setTimeout(()=>  userChoice.classList.remove('gray-glow'),1000);
}
function game(userChoice)
{
		const computerchoice = getComputerChoice();
		switch (userChoice + computerchoice){
			case "rs":
			case "pr":
			case "sp":
			win(userChoice,computerchoice);
			break;
			case "sr":
			case "rp":
			case "ps":
			lose(userChoice,computerchoice);
			break;
			default:
			draw(userChoice,computerchoice);
			break;
		}
}
function main(){
	rock_div.addEventListener("click",() => game("r"));
	paper_div.addEventListener("click",() => game("p"));
	scissors_div.addEventListener("click",() => game("s"));
}
main();
