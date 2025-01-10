/*
Write a program that creates a string that represents an 8×8 grid.
At each position of the grid there is either a space or a "#" character.
          # # # #
        # # # # 
         # # # #
        # # # # 
         # # # #
        # # # # 
         # # # #
        # # # #
*/

const size = 8;

for(let i = 0; i < size; i++) {
  let row = "";
  
  for(let j = 0; j < size; j++) {
    if((j + i) % 2 !== 0) { // (j+i) are like the coordinates for the spaces... first row: (0,0) (0,1) (0,2)...
      row  += "#";
    }
    else {
      row += " ";
    }
  }

  console.log(row);
}