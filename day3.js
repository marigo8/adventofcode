/*NOTES
  - x and y variables
  - directions increment and decrement x and y
    - ^: y++
    - >: x++
    - v: y--
    - <: x--
  - need to keep track of houses
    
*/

/*
    //p indicates pseudo-code
*/

//FUNCTIONS
function displayLocation(){
  console.log("( "+x+", "+y+")");
}

function move(direction){
  switch(direction){
    case "^":
      y++;
      break;
    case ">":
      x++;
      break;
    case "v":
      y--;
      break;
    case "<":
      x--;
      break;
  }
  displayLocation();
}

function createHouse(){
  
}

//VARIABLES
var directions = prompt("Directions please?");
var x = 0, y = 0;
var houseCounter = 1; // not 0 because of starting point.

//OBJECTS
// use a constructor that creates a house with the properties: x and y
/*example
{
  id: 32, <-- maybe?
  x: 13,
  y: 42
}
*/
var House = function(){
  this.x = x;
  this.y = y;
}

/*
---MAIN CODE---
*/

//p mark house(0,0) as visited

for(var i = 0, n = directions.length; i < n; i++){
  move(directions[i]);
  if(house[/*left off here*/][]){
    create house;
  }
}
