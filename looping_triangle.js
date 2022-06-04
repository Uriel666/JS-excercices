/**
 * LOOPING TRIANGLE
 * 
 * Write a loop that makes seven calls to console.lon to output the following
 * #
 * ##
 * ###
 * ####
 * 
 */

let rows = 7;
let count = 1;
let draw = "#";

// Using while
while(count <= rows){

  while(draw.length < count){
    draw =draw+"#";
  }
  
  console.log(draw);
  count++;
}

// Using for

// Initializing again the draw variable
draw = "#";

for(let i = 1; i <= rows ; i++){
    while(draw.length < i){
        draw = draw+"#";
    }

    console.log(draw);
}
