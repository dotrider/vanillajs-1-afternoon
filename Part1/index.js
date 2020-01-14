console.log('test');

let board = [];

function play(clickedId){
let playerSpan = document.getElementById('player');
let clickedElement = document.getElementById(clickedId);
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else{
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    } 

    let topLeft = board[0];
    let topMiddle = board[1];
    let topRight = board[2];
    let middleLeft = board[3];
    let middleCenter = board[4];
    let middleRight = board[5];
    let bottomLeft = board[6];
    let bottomCenter = board[7];
    let bottomRight = board[8];

    if(topLeft !== undefined && topLeft === topMiddle && topLeft === topRight){
         alert(topLeft + ' ' + 'You Won!');
         return;

    }if(middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
        alert(middleLeft + ' ' + 'You Won!');
        return;

    }if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(bottomLeft + ' ' + 'You Won!');
        return;
        
    }if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(topLeft  + ' ' + 'You Won');
        return;

    }if(topMiddle !== undefined && topMiddle === middleCenter && topMiddle === bottomCenter){
        alert(topMiddle + ' ' + 'You Won!');
        return;

    }if(topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(topRight + ' ' + 'You Won!');
        return;
    }

        let boardFull = true;

        for(let i = 0; i <= 8; i++ ){
            if(board[i] === undefined){
                boardFull = false;
            }
        }
            if (boardFull === true){
                alert('Cats game! No Winner!');
            }
        }




