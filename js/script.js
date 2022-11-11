const rock = document.querySelector('#rock'); 
const paper = document.querySelector('#paper'); 
const scissors = document.querySelector('#scissors'); 
const compItems = [ "Rock", "Paper", "Scissors" ]; 
const letsPlay = document.querySelector('.lets-play'); 
const record = document.querySelector('#record');
let startContainer = document.getElementById("start-container");
let playerScore = 0;
let compScore = 0;
let roundNum = 0;

function startGame() {
  let container = document.getElementById("container");
  startContainer.style.display = "none"
  container.style.display = "block"
  startGame();
}


rock.addEventListener('click', function() {
  playerSelection = "Rock";
  playRound();
})
paper.addEventListener('click', function() {
  playerSelection = "Paper";
  playRound();
})
scissors.addEventListener('click', function() {
  playerSelection = "Scissors";
  playRound();
})


function playRound() {
  letsPlay.style.display = 'none';
  displayPlayerItem(playerSelection);
  roundNum++;
  displayRound(roundNum);
  compSelection = computerPlay();
  displayCompItem(compSelection);
  updateScore(playerSelection, compSelection);
  whoWon(playerScore, compScore);
}
//--------------------------//
function displayPlayerItem(playerSelection) {
  const left = document.createElement('div');
  const yourRecord = document.createElement('span');
  left.classList.add('left');
  yourRecord.classList.add('your-record'); 
  yourRecord.textContent = playerSelection + "!";
  left.append(yourRecord); 
  record.append(left);
}

function displayRound(roundNum) {
  const center = document.createElement('div');
  center.classList.add('center');
  center.textContent = 'Round ' + roundNum;
  center.style.color ="white"
  record.append(center);
}

function displayCompItem(compSelection) {
  const right = document.createElement('div');
  const compRecord = document.createElement('span');
  const clear = document.createElement('div');
  right.classList.add('right'); 
  compRecord.classList.add('comp-record');
  compRecord.textContent = compSelection + "!";
  right.append(compRecord);
  record.append(right); 
  clear.classList.add('clear');
  record.append(clear);
}
//-----------------------------------------------------------//

function computerPlay() { 
  return compItems[Math.floor(Math.random()*compItems.length)];
}

function updateScore(playerSelection, compSelection) {
  const myScoreDisplay = document.querySelector('#my-score');
  const compScoreDisplay = document.querySelector('#comp-score');
  if (playerSelection == compSelection) {
    return alert("Tabla Pa nga!");
  } else if (playerSelection == "Rock" && compSelection == "Scissors") {
    return alert("Nice One!") ,myScoreDisplay.textContent = playerScore += 1;
  } else if (playerSelection == "Paper" && compSelection == "Rock") {
    return alert("Good Job!"), myScoreDisplay.textContent = playerScore += 1;
  } else if (playerSelection == "Scissors" && compSelection == "Paper") {
    return alert("Bagaangg!"), myScoreDisplay.textContent = playerScore += 1;
  } else {
    return alert("You Lose"), compScoreDisplay.textContent = compScore += 1;
  }
}

function whoWon(playerScore, compScore) { 
  if (playerScore == 3 || compScore == 3) {
    const play = document.querySelector('#play');
    const greenBanner = document.querySelector('#banner-green');
    const results = document.querySelector('#results');
    const pinkBanner = document.querySelector('#banner-pink');
    const record = document.querySelector('#record')
    play.style.display = 'none';
    greenBanner.style.display = 'none';
    record.style.display = 'none'
    pinkBanner.style.display = 'none'
    results.style.display = 'block'
  }
  if (playerScore == 3) { 
    const youWon = document.querySelector('#you-won');
    youWon.style.display = 'block'; 
  
   
    
  } 
  if (compScore == 3) {
    const youLost = document.querySelector('#you-lost');
    youLost.style.display = 'block';
  
    
    
  }
}

