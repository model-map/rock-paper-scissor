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

const buttons       =document.querySelectorAll('.button');
const matchesPlayed =document.querySelector('#matchesPlayed');
const matchResult   =document.querySelectorAll('.matchResult');

buttons.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const playerChoice=choice.id;
        const result=playRound(playerChoice);
        matchResult.forEach((outcome)=>{
            if (outcome.id==result){
                outcome.textContent=parseInt(outcome.textContent)+1;
                const outcomeParent=outcome.parentElement
                outcomeParent.classList.add("bing");
                outcomeParent.addEventListener('transitionend',()=>outcomeParent.classList.remove("bing"));

                console.log(outcome);
            }
        })
        matchesPlayed.textContent=parseInt(matchesPlayed.textContent)+1;
    });
})

// h1 element animation

const h1=document.querySelector('h1');
h1.addEventListener('mouseover',()=>{
    h1.textContent='DONT TOUCH ME!!';
});
h1.addEventListener('click',()=>{
    h1.textContent="DONT CLICK ME EITHER!!!";
})
h1.addEventListener('dblclick',()=>{
    h1.textContent="IM CALLING MY LAWYER!!!!";
})
h1.addEventListener('mouseout',()=>{
    h1.textContent='Rock Paper Scissor Deathmatch!';
});
const body=document.querySelector('body');
const p = document.querySelector('p');
// EASTER EGG
function colorRandomiser(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    return (`rgb(${red},${green},${blue})`);
}
function bgColor(){
    body.style['background-color']=`${colorRandomiser()}`;
    h1.style['color']=`${colorRandomiser()}`;
    p.style['color']=`${colorRandomiser()}`;
}

const easteregg=document.querySelector('.easteregg');
easteregg.addEventListener('mouseover',()=>{
    const bgInterval=setInterval(bgColor,500);
    easteregg.addEventListener('mouseout',()=>{
        clearInterval(bgInterval);
/*         body.style['background-color']=`#4B231B`;
        h1.style['color']="yellow";
        p.style['color']=`#bfa602`; */
    })
});