// My solution to DAY 1 of Advent of Code.

"use strict";

function upOrDown(direction){
  if(direction == "("){
    return +1;
  }else if(direction == ")"){
    return -1;
  }else{
    alert("those are litterally the worst directions that have ever been given to me.");
    return error;
  }
}

var santa = 0;
var moveCount = 0;
var directions = prompt("directions?");

var askStopAt;
var useStopAt;
var stopAt;

do{
  askStopAt = prompt("Is there a specific floor you wish to stop at?\n\n(y)es or (n)o?");
}while(askStopAt != "y" && askStopAt != "n");

if(askStopAt == "y"){
  useStopAt = true;
  stopAt = prompt("Where do you wish to stop?");
}else{
  useStopAt = false;
}

for(var i = 0, n = directions.length; i < n; i++){
  santa += upOrDown(directions[i]);
  if(useStopAt){
    if(santa == stopAt){
      alert("stopped at " + (i + 1) + " moves");
      break;
    }
  }
}

alert("santa is at floor "+santa);
