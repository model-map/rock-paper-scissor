/* 
Function list:
    function getPlayerChoice();
    function cleanPlayerChoice();
    function getComputerChoice();
    function playRound();
    function game();
*/

function getPlayerChoice(){ // Get player's choice
    let playerChoice=prompt('Enter your choice, fighter! [rock, paper, scissor]','rock');
    playerChoice=cleanPlayerChoice(playerChoice);
    if (!playerChoice) getPlayerChoice();     // if playerChoice is null it'll result false
                                             // player will be prompted until they enter acceptable choice
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
            playerChoice='scissors';
            break;
        default:
            playerChoice=null;              // if player enters an incorrect prompt set choice to null.
            break;
    }

    return (playerChoice);
}

function getComputerChoice(){
    const choice_list=['rock','paper','scissors'];
    let random_index=Math.floor(Math.random()*3); //Generate a random number from 0 to 2 for index.
    let computerChoice=choice_list[random_index];
    return (computerChoice);
}

function playRound(playerChoice){
    // Function returns player's result.
    // 0 if player lost
    // 1 if player won
    // null if it's a draw
    const choiceIndexPair={'rock':0,'paper':1,'scissors':2};
    let computerChoice=getComputerChoice();
    let playerChoiceIndex=choiceIndexPair[playerChoice];
    let computerChoiceIndex=choiceIndexPair[computerChoice];
    let choiceIndexPairLength= Object.keys(choiceIndexPair).length;
    let result=null;

/*     console.log(`Players choice ${playerChoice} and index ${playerChoiceIndex}\nComputer choice ${computerChoice} and index ${computerChoiceIndex}`); */

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
    return (result);
}

function game(){
    let total_rounds=parseInt(prompt("Enter the number of rounds you'll fight for, fighter!"));
    let win,loss,draw;
    win=loss=draw=0;
    let playerChoice=getPlayerChoice();

    for (i=1;i<=total_rounds;i++){
        let result=playRound(playerChoice);
        
        switch(result){
            case 0:
                loss++;
                break;
            case 1:
                win++;
                break;
            default:
                draw++;
                break;
        }
    }

    return (`\nOut of ${total_rounds} rounds you played with ${playerChoice}\nYou Won: ${win}\nLost: ${loss}\nand Drew: ${draw} `);
    
}