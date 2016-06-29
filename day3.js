/*NOTES
  - x and y variables
  - directions increment and decrement x and y
    - ^: y++
    - >: x++
    - v: y--
    - <: x--
  - need to keep track of houses
    - use arrays
      - house[x][y] = true
*/

/*
    //p indicates pseudo-code
*/

//FUNCTIONS
function displayLocation(){ // for debugging purposes
  console.log("( "+x+", "+y+")");
}

function checkVisited(xyString, arrayToSearch){ // checks if the house exists in the houses array
  for(var i = 0, n = arrayToSearch.length; i < n; i++){ // for every house in the array.
    if(arrayToSearch[i] == xyString){ // if the house is in the array
      return true // return true for visited
    }
  }
  return false; // if the house is nowhere to be found, return false
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
  // displayLocation();
}

function createHouse(){
  
}

//VARIABLES
var directions = prompt("Directions please?");
var x = 0, y = 0;
var xyString;
var houseCounter = 0;

var houses = ["0,0"];


/*
---MAIN CODE---
*/

for(var i = 0, n = directions.length; i < n; i++){
  xyString = x+","+y;
  if(!checkVisited(xyString, houses)){
    houses.push(xyString)
  }
  move(directions[i]);
}
alert(houses.length);
console.log(houses.length);
