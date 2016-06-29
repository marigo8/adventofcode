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
function displayLocation(person){ // for debugging purposes
  console.log("( "+person.x+", "+person.y+")");
}

function checkVisited(xyString, arrayToSearch){ // checks if the house exists in the houses array
  for(var i = 0, n = arrayToSearch.length; i < n; i++){ // for every house in the array.
    if(arrayToSearch[i] == xyString){ // if the house is in the array
      return true // return true for visited
    }
  }
  return false; // if the house is nowhere to be found, return false
}

function move(direction, person){
  switch(direction){
    case "^":
      person.y++;
      break;
    case ">":
      person.x++;
      break;
    case "v":
      person.y--;
      break;
    case "<":
      person.x--;
      break;
  }
  displayLocation(person);
}

function takeDirections(person){
  move(directions[i],person);
  xyString = person.x+","+person.y;
  if(!checkVisited(xyString, houses)){
    console.log("adding house "+xyString)
    houses.push(xyString);
    console.log("added house "+xyString)
  }
}

// OBJECTS
var Santa = {
  x: 0,
  y: 0
}
var Robot = {
  x: 0,
  y: 0
}

//VARIABLES
var directions = prompt("Directions please?");
var houseCounter = 0;
var houses = ["0,0"];


/*
---MAIN CODE---
*/

for(var i = 0, n = directions.length; i < n; i++){
  if(i % 2 === 0){
    console.log("\nSanta:")
    takeDirections(Santa);
  }else{
    console.log("\nRobot:")
    takeDirections(Robot);
  }
}
alert(houses.length);
console.log(houses.length);
