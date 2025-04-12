function getComputerChoice(){
    let temp = Math.random();
    temp*=30;
    if(temp <10) return "rock"; //Rock
    if(temp <20) return "paper"; //Paper
    if(temp <30) return "scissors"; //Scissor
}

let divc= document.querySelector(".choice");
let divtext=document.querySelector(".resultText");
let display=document.querySelector(".resultDisplay");
let humanChoice,computerChoice;

divtext.style.fontSize ="50px";
display.style.fontSize ="50px";
divc.addEventListener("click", function(e){
    let target= e.target.closest("button");
    
    switch (target.className){
        case "rock":{
            
            humanChoice="rock";
            computerChoice=getComputerChoice();
            playRound(humanChoice,computerChoice);
            break;
        }
        case "paper":{
            humanChoice="paper";
            computerChoice=getComputerChoice();
            playRound(humanChoice,computerChoice);
            break;
        }
        case "scissors":{
            humanChoice="scissors";
            computerChoice=getComputerChoice();
            playRound(humanChoice,computerChoice);
            break;
        }
    }
    display.textContent=`Currently, your score is ${humanScore}, meanwhile the computer score is ${computerScore}`;
})
let humanScore=0;
let computerScore=0;

function playRound(humanChoice1,computerChoice1){
    function parseC(choice){
        if(choice =='rock') return 1;
        else if(choice =='paper') return 2;
        else if(choice=='scissors') return 3;
        else return 4;
    }
    let parseHum=parseC(humanChoice1);
    let parseCom=parseC(computerChoice1);
    if(parseHum == 4){
        divtext.textContent="You input is wrong";
        return;
    }
    if(parseHum == parseCom){
        divtext.textContent=`Draw! You are lucky! You both choose ${humanChoice1}`;
        return;
    }
    else{
        if(parseHum - parseCom == 1){
            divtext.textContent="You just win!"+` ${humanChoice1} beats ${computerChoice1}`;
            //only 3,2 and 2,1
            humanScore++;
            return;
        }
        else if(parseHum - parseCom == -1){
            divtext.textContent="You just lose!"+ `${computerChoice1} beats ${humanChoice1}`;
            //only 1,2 and 2,3
            computerScore++;
            return;
        }
        else if(parseHum>parseCom){
            divtext.textContent="You just lose!"+ `${computerChoice1} beats ${humanChoice1}`;
            //only 3 1
            computerScore++;
            return;
        }
        else{
            divtext.textContent="You just win!"+ `${humanChoice1} beats ${computerChoice1}`;
            //only 1 3
            humanScore++;
            return;
        }
    }
    
}
