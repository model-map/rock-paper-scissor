/* 
Function list:
    function getPlayerChoice();
    function getComputerChoice();
    function playRound();
    function game();
*/

// Git Branch: rps-ui2

function getPlayerChoice(){ // Get player's choice
    const playerChoice=prompt('Enter your choice, fighter! [rock, paper, scissor]','rock');
    playerChoice=playerChoice.toLowerCase().trim();
    if (!['rock','paper','scissors'].includes(playerChoice)) getPlayerChoice();
    return playerChoice;
}

function getComputerChoice(){
    const choice_list=['rock','paper','scissors'];
    const random_index=Math.floor(Math.random()*3); //Generate a random number from 0 to 2 for index.
    const computerChoice=choice_list[random_index];
    return (computerChoice);
}

function playRound(playerChoice){
    // Function returns player's result.
    // 0 if player lost
    // 1 if player won
    // null if it's a draw
    const choiceIndexPair={'rock':0,'paper':1,'scissors':2};
    const computerChoice=getComputerChoice();
    const playerChoiceIndex=choiceIndexPair[playerChoice];
    const computerChoiceIndex=choiceIndexPair[computerChoice];
    const choiceIndexPairLength= Object.keys(choiceIndexPair).length;
    let result='draw';

/*     console.log(`Players choice ${playerChoice} and index ${playerChoiceIndex}\nComputer choice ${computerChoice} and index ${computerChoiceIndex}`); */

    if (playerChoiceIndex==computerChoiceIndex){
    }
    else if ((playerChoiceIndex!=(choiceIndexPairLength-1))&&(computerChoiceIndex==playerChoiceIndex+1)){
        result='loss';
    }
    else if ((playerChoiceIndex==(choiceIndexPairLength-1))&&(computerChoiceIndex==0)){
        result='loss';
    }
    else{
        result='win';
    }
    return (result);
}

const buttons       =document.querySelectorAll('button');
const matchesPlayed =document.querySelector('#matchesPlayed');
const matchResult   =document.querySelectorAll('.matchResult');

buttons.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const playerChoice=choice.id;
        const result=playRound(playerChoice);
        matchResult.forEach((outcome)=>{
            if (outcome.id==result){
                outcome.textContent=parseInt(outcome.textContent)+1;
            }
        })
        matchesPlayed.textContent=parseInt(matchesPlayed.textContent)+1;
    });
})