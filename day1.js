// My solution to DAY 1 of Advent of Code.

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
var directions = prompt("directions?");


for(var i = 0, n = directions.length; i < n; i++){
  santa += upOrDown(directions[i]);
}

alert(santa);
