let compScore = 0;
let UserScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#User-score");
const comp_score = document.querySelector("#Comp-score");
// for every choice we add evenet listener
const compChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};
const showWinner = (userWin,userChoice,computerChoice) =>{
    if(userWin) {
        UserScore++;
        user_score.innerText = UserScore;
        console.log("user wins");
        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        comp_score.innerText = compScore;
        console.log("computer wins");
        msg.innerText = `You lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    console.log(userChoice);
    // computer choice
    const computerChoice = compChoice();
    console.log("computer: ", computerChoice);

    // check for draw conditio
    
    if(userChoice===computerChoice){
        console.log("Game was draw");
        msg.innerText = "Game was draw! Try again";
        msg.style.backgroundColor = "#081b31";
    }
    else {
        let userWin = true;
        if(userChoice=="paper"){
            // for computer choice is Rock or scissor
            userWin = (computerChoice==="rock") ? true : false;
        }
        else{
            // here user choice is scissor
            // for computer choice is rock or paper
            userWin = (computerChoice==="rock") ? false : true;
        }  
        showWinner(userWin,userChoice,computerChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        // get the value of the clicked choice
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
