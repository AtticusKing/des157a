(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');

    const game = document.querySelector('#game');
    const game2 = document.querySelector('#game2');

    const actionArea = document.querySelector('#actions');
    const actionArea2 = document.querySelector('#actions2');

    const score = document.querySelector('#score');


    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };
    

/*     //This gets the current player: 
gameData.players[gameData.index]

//This gets the first die and the second die: 
gameData.dice[gameData.roll1-1]
gameData.dice[gameData.roll2-1]

//This gets the score of the current player: 
gameData.score[gameData.index]

//This gets the index, or turn
gameData.index

//This gets the individual dice values and the added dice value
gameData.roll1
gameData.roll2
gameData.rollSum

//This gets the winning threshold
gameData.rollSum
 */


startGame.addEventListener("click", function(){
    // randomly set game index here...
    gameData.index = Math.round(Math.random());
    //console.log(gameData.index);

    gameControl.innerHTML = '<button id="quit">QUIT</button>';

    document.getElementById('quit').addEventListener("click", function(){
        location.reload();
    });
    //console.log("set up the turn!");
    setUpTurn();
});


function setUpTurn() {
    game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
    actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
    document.getElementById('roll').addEventListener("click", function(){

        //console.log("roll the dice!");
        throwDice()

    });
}

function throwDice(){
    actionArea.innerHTML = '';
    gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ciel could result in zero
    gameData.roll2 = Math.floor(Math.random() * 6) + 1;
    game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
    game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}">
                        <img src = "${gameData.dice[gameData.roll2-1]}">`;
    gameData.rollSum = gameData.roll1 + gameData.roll2;

    //if two 1's are rolled...
    if( gameData.rollSum === 2){
        game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
        gameData.score[gameData.index] = 0;
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        
        showCurrentScore();
        //show the current score
        setTimeout(setUpTurn, 2000);
    } //end of two 1's.


    //if either die is a 1...
    else if(gameData.roll1 === 1 || gameData.roll2 === 1){
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${
                gameData.players[gameData.index]
        }</p>`;
        setTimeout(setUpTurn, 2000);
    } //end of either dice is a 1.


    //if neither die is a 1...
    else {
        gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
        actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id = "pass">Pass</button>';

        document.getElementById('rollagain').addEventListener('click', function(){
            setUpTurn();
        });

        document.getElementById('pass').addEventListener('click', function(){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setUpTurn();
        });
        
        //check winning condition!
    } //end of neither dice is a 1.

    checkWinningCondition();
} //end of throwdice function


//check winning
function checkWinningCondition(){
    if(gameData.score[gameData.index] > gameData.gameEnd){
        score.innerHTML = `<h2>${gameData.players[gameData.index]}
        wins with ${gameData.score[gameData.index]} points!</h2>`;

        actionArea.innerHTML = '';
        document.getElementById('quit').innerHTML = "Start a New Game?";
    }
    else {
        //show current score...
        showCurrentScore();
    }
} //end check win

function showCurrentScore(){
    score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
    ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
    ${gameData.score[1]}</strong></p>`;
}


})(); //end of main function