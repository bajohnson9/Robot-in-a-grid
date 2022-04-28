/*
    As it stands, this is how the problem is set up.

    The board is randomly generated, each spot has a 1/3 
    chance to be a 1`except starting and ending positions.
    
    The robot attempts to step down first, then attempts 
    to step right. This process repeats until in the 
    finish position.

    It's impossible to move to the same spot twice, so the
    game is lost if the total number of moves exceeds the 
    total number of spaces.
*/


let size = 6; //can be changed. designates size of the board.
let iterationCounter = 0; //counts how many move attempts are made
let xPos:number = 0; //current X coordinate 
let yPos:number = 0; //current Y coordinate
let board = Array(size); //holds the board


//creates the board
for (let i = 0; i < size; i++) {
    board[i] = Array(size).fill(0);
    for(let j = 0; j < size; j++){
        board[i][j] = Math.floor(Math.random()*3)
        if(board[i][j] == 2) board[i][j] = 0; //if the spot is '2' it's changed back to '0', hence 1/3 chance of being '1'
    }
}
//starting and finishing positions set to 0
board[0][0] = 0; 
board[size-1][size-1] = 0;
//print
for(let x = 0; x < board.length; x++){
    console.log(board[x])
}


while(xPos+yPos !== (size-1)+(size-1)){

    iterationCounter++;
    
    if(yPos != size-1){
        if(board[yPos+1][xPos] != 1){
            yPos++;
            console.log(`i moved down, now at ${xPos},${yPos}`)
        }
    }
    if(xPos != size-1){
        if(xPos != size) if(board[yPos][xPos+1] != 1){
            xPos++;
            console.log(`i moved right, now at ${xPos},${yPos}`)
        }
    }
    
    
    if(iterationCounter > size*size) break;
    
}

console.log("ending position: " + xPos + ',' + yPos)
if(xPos == size-1 && yPos == size-1){
    console.log('success!')
} else console.log('failure (aww)');