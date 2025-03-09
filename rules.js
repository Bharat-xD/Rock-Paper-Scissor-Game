let score = JSON.parse(localStorage.getItem('score'));  //Converting a JSON-formatted string into a JavaScript object.
if(score === null){
  score = {
  wins: 0,
  losses: 0,
  ties: 0
  }
}

document.getElementById('reset-btn').addEventListener('click', scoreReset); // Adds a click event listener to the element with ID 'reset-btn'



function scoreReset(){
  score.wins = 0,
  score.losses = 0,
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
}

updateScore();

//Code for mave made by player
function moveSelected(playerMove){
  const compMove = pickCompMove();

  let result = ''; //result updates

// comparison of player move and computer move
if(playerMove === 'rock'){     // if player move is rock
    if(compMove === 'rock'){
      result = 'Tie.';
    }
    else if(compMove === 'scissors'){
      result = 'You Won.'
    }
    else if(compMove === 'paper'){
      result = 'You Lose.'
    }
  }
  
else if(playerMove === 'paper'){     // if player move is paper
    if(compMove === 'paper'){
      result = 'Tie.';
    }
    else if(compMove === 'rock'){
      result = 'You Won.'
    }
    else if(compMove === 'scissors'){
      result = 'You Lose.'
    }

  }
  
else if(playerMove === 'scissors'){     // if player move is scissor
    if(compMove === 'scissors'){
      result = 'Tie.';
    }
    else if(compMove === 'paper'){
      result = 'You Won.'
    }
    else if(compMove === 'rock'){
      result = 'You Lose.'
    }
  }

//result decleration
if(result === 'You Won.'){
  score.wins = score.wins + 1;
}
else if(result === 'You Lose.'){
  score.losses = score.losses + 1;
}
else if(result === 'Tie.'){
  score.ties = score.ties + 1;
}


localStorage.setItem('score', JSON.stringify(score));  //storing the score on localStorage
updateScore(); // updating score

document.querySelector('.plr-vs-comp').innerHTML = result; //Displaying result on screen

//Displaying the player move and comp move
document.querySelector('.moves-plr-n-comp').innerHTML = `You picked<img src="images/${playerMove}-emoji.png" alt="your-move" style="width: 50px; height: 50px;">. Computer picked<img src="images/${compMove}-emoji.png" alt="computer-move" style="width: 50px; height: 50px;">.${result}`;
}

//score board
function updateScore(){
  document.querySelector(".game-score").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//code for computer to choose its move
function pickCompMove() {
  const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

let compMove = ''; //Computer move callback

if (randomNumber === 0) {
  compMove = 'rock';
}
else if(randomNumber === 1) {
  compMove = 'paper';
}
else if(randomNumber === 2) {
  compMove = 'scissors';
}

console.log(compMove);

return compMove;
}