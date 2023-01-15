/* function getPlayerChoice();
function cleanPlayerChoice();
function getComputerChoice();
function game();
function playRound(); */

function getPlayerChoice(){
    let player_prompt=prompt('Enter your choice, fighter! [rock, paper, scissor]','rock');
    player_prompt=cleanPlayerChoice(player_prompt);
    console.log(player_prompt);
}

function cleanPlayerChoice(player_prompt){
    player_prompt=player_prompt.toLowerCase(); // convert to lower case
    player_prompt=player_prompt.trim();       // remove whitespace
    
    switch(player_prompt){
        case 'rock':
            case 'rocks':
                player_prompt='rock';
                break;
        case 'paper':
            case 'papers':
                player_prompt='paper';
                break;
        case 'scissor':
            case 'scissors':
                player_prompt='scissor';
                break;
        default:
            player_prompt=null;
    }

    return (player_prompt);
}

