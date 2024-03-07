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

    const button = document.querySelector('button');

    const gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    const lowSound = new Audio('sounds/low.mp3');
    const highSound = new Audio('sounds/high.mp3');
    const celebrateSound = new Audio('sounds/celebrate.mp3');
    const sadSound = new Audio('sounds/sad.mp3');
    const squeakSound = new Audio('sounds/squeak.mp3');
    



    gameControl.addEventListener('mousedown', function() {
        highSound.play();
    });

    actionArea.addEventListener('mousedown', function() {
        lowSound.play();
    });

    







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
        sadSound.play();
    });
    //console.log("set up the turn!");
    setUpTurn();
});


function setUpTurn() {
    game.innerHTML = `<h3>${gameData.players[gameData.index]}</h3>`;
    actionArea.innerHTML = '<button id="roll">Roll</button>';
    document.getElementById('roll').addEventListener("click", function(){

        //console.log("roll the dice!");
        throwDice()

    });
}

function throwDice(){
    actionArea.innerHTML = '';
    gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ciel could result in zero
    gameData.roll2 = Math.floor(Math.random() * 6) + 1;
    game.innerHTML = `<h3>${gameData.players[gameData.index]}</h3>`;
    game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}">
                        <img src = "${gameData.dice[gameData.roll2-1]}">`;
    gameData.rollSum = gameData.roll1 + gameData.roll2;

    //if two 1's are rolled...
    if( gameData.rollSum === 2){
        game.innerHTML += '<p>Uh oh! Snake eyes!</p>';
        gameData.score[gameData.index] = 0;
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        
        sadSound.play();
        showCurrentScore();
        //show the current score
        setTimeout(setUpTurn, 2000);
    } //end of two 1's.


    //if either die is a 1...
    else if(gameData.roll1 === 1 || gameData.roll2 === 1){
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        game.innerHTML += '<p>Sorry, one of your rolls was a one. Switching players...</p>';

        squeakSound.play();
        setTimeout(setUpTurn, 2000);
    } //end of either dice is a 1.


    //if neither die is a 1...
    else {
        gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
        actionArea.innerHTML = '<button id="rollagain">Roll again</button> <div></div> <button id = "pass">Pass</button>';

        document.getElementById('rollagain').addEventListener('click', function(){
            
            setUpTurn();
        });

        document.getElementById('pass').addEventListener('click', function(){
            squeakSound.play();
            gameData.score[gameData.index] += 3;
            showCurrentScore();

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
        score.innerHTML = `<h4>${gameData.players[gameData.index]}
        wins with ${gameData.score[gameData.index]} points!</h4>`;
        celebrateSound.play();

        actionArea.innerHTML = '';
        document.getElementById('quit').innerHTML = "Restart";
    }
    else {
        //show current score...
        showCurrentScore();
        
    }
} //end check win

function showCurrentScore(){
    score.innerHTML = `<p>${gameData.score[0]} - ${gameData.score[1]}</p>`;
}


})(); //end of main function
