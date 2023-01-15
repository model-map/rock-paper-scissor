/* 
function getPlayerChoice();
function cleanPlayerChoice();
function getComputerChoice();
function game();
function playRound();*/

function getPlayerChoice(){ // Get player's choice
    let playerChoice=prompt('Enter your choice, fighter! [rock, paper, scissor]','rock');
    playerChoice=cleanPlayerChoice(playerChoice);
    if (!playerChoice) getPlayerChoice();
    return (playerChoice);
}

function cleanPlayerChoice(playerChoice){
    playerChoice=playerChoice.toLowerCase(); // convert to lower case
    playerChoice=playerChoice.trim();       // remove whitespace
    
    switch(playerChoice){
        case 'rock':
            case 'rocks':
                playerChoice='rock';
                break;
        case 'paper':
            case 'papers':
                playerChoice='paper';
                break;
        case 'scissor':
            case 'scissors':
                playerChoice='scissor';
                break;
        default:
            playerChoice=null;
    }

    return (playerChoice);
}

function getComputerChoice(){
    const choice_list=['rock','paper','scissor'];
    let random_index=Math.floor(Math.random()*3);
    let computerChoice=choice_list[random_index];
    return (computerChoice);
}

function playRound(playerChoice){
    const choiceIndexPair={'rock':0,'paper':1,'scissor':2};
    let computerChoice=getComputerChoice();
    let playerChoiceIndex=choiceIndexPair[playerChoice];
    let computerChoiceIndex=choiceIndexPair[computerChoice];
    let choiceIndexPairLength= Object.keys(choiceIndexPair).length;
    let result=null;

    if (playerChoiceIndex==computerChoiceIndex){
    }
    else if ((playerChoiceIndex!=(choiceIndexPairLength-1))&&(computerChoiceIndex==playerChoiceIndex+1)){
        result=0;
    }
    else if ((playerChoiceIndex==(choiceIndexPairLength-1))&&(computerChoiceIndex==0)){
        result=0;
    }
    else{
        result=1;
    }
    console.log("Player choice",playerChoice);
    console.log("Computer choice",computerChoice);
    return (result);
}