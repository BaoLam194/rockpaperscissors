function getComputerChoice(){
    let temp = Math.random();
    temp*=30;
    if(temp <10) return "rock"; //Rock
    if(temp <20) return "paper"; //Paper
    if(temp <30) return "scissor"; //Scissor
}

function getHumanChoice(){
    let inputH=prompt("What is your move? Valid move is rock, paper, scissor");
    inputH=inputH.toLowerCase();
    return inputH;
}

function playGame(){
    let humanScore=0;
    let computerScore=0;
    function playRound(humanChoice1,computerChoice1){
        function parseC(choice){
            if(choice =='rock') return 1;
            else if(choice =='paper') return 2;
            else if(choice=='scissor') return 3;
            else return 4;
        }
        let parseHum=parseC(humanChoice1);
        let parseCom=parseC(computerChoice1);
        if(parseHum == 4){
            console.log("You input is wrong");
            return;
        }
        if(parseHum ==parseCom){
            console.log("Draw! You are lucky!");
        }
        else{
            if(parseHum - parseCom == 1){
                console.log("You are the winner!"+` ${humanChoice1} beats ${computerChoice1}`);
                //only 3,2 and 2,1
                humanScore++;
            }
            else if(parseHum - parseCom == -1){
                console.log("You are the loser!"+ `${computerChoice1} beats ${humanChoice1}`);
                //only 1,2 and 2,3
                computerScore++;
            }
            else if(parseHum>parseCom){
                console.log("You are the loser!"+ `${computerChoice1} beats ${humanChoice1}`);
                //only 3 1
                computerScore++;
            }
            else{
                console.log("You are the winner"+ `${humanChoice1} beats ${computerChoice1}`);
                //only 1 3
                humanScore++;
            }
        }
    }
    for(let i =1;i<=5;i++){
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
    if(humanScore>computerScore){
        console.log("Overall you are the winner!");
    }
    if(humanScore<computerScore){
        console.log("So sad! You are loser");
    }
    if(humanScore==computerScore){
        console.log("Overall draw!");
    }
}
playGame();