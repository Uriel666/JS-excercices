/**
 * CHESSBOARD
 * 
 *Write a program that creates a string that represents an 8x8 grid, using
 *newline characters to separate lines. At each position of the grid there 
 *either a space or a character. 
 */

let size = 4;
let count = 1;
let i = 1;
let draw = "";

while(count <= size){

    while(i<= size){
        draw += "#";
        if(i === size){
            draw+="\n";
        }
        i++;
    }
    i = 1;
    count++;
}

console.log(draw);

// #\n 