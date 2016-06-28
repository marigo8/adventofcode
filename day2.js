/*
TODOS:

Part 1: CHECK!
- convert list into a usable array. CHECK!
- create a function. CHECK!
  - finds surface area. CHECK!
  - finds smallest side. CHECK!
    - adds that value to the total surface area. CHECK!
- use array in function. CHECK!
  - also keep track of total surface area CHECK!
  
Part 2:
- create findRibbonAmount function
  - use smallest2sides (returns an array of two numbers: small = [x,y])
  - 2(small[0]) + 2(small[1])
  - add that to l*w*h
*/



function setUpArray(list){
  var newArray = [];
  var miniArray = [];
  
  var numberString = "";
  var currentChar;
  // newArray [dimensions set][number]
  for(var i = 0, n = list.length; i < n; i++){
    currentChar = list[i];
    if(currentChar == "x"){
      
      // add number
      miniArray.push(parseInt(numberString, 10));
      numberString = "";
      
    }else if(currentChar == " "){
      
      // add dimension set
      
      miniArray.push(parseInt(numberString, 10));
      numberString = "";
      
      newArray.push(miniArray);
      miniArray = [];
      
    }else{
      
      // record digit
      numberString += currentChar;
      
    }
  }
  miniArray.push(parseInt(numberString, 10));
  numberString = "";
  
  newArray.push(miniArray);
  return newArray;
}

function smallestSide(s0,s1,s2){
  var winner = s0
  if(winner > s1){
    winner = s1;
  }
  if(winner > s2){
    winner = s2;
  }
  return winner;
}
function smallest2Numbers(s0,s1,s2){
  // find greatest side
  var winner = s0
  if(winner < s1){
    winner = s1;
  }
  if(winner < s2){
    winner = s2;
  }
  
  // return everything but the greatest side
  switch(winner){
    case s0:
      return [s1,s2];
    case s1:
      return [s0,s2];
    case s2:
      return [s0,s1];
  }
}

function findWrapAmount(array){
  var l = array[0], w = array[1], h = array[2];
  var side0 = l*w, side1 = w*h, side2 = h*l;
  
  var subtotal = 2*side0 + 2*side1 + 2*side2;
  
  var total = subtotal + smallestSide(side0,side1,side2);
  return total;
}

function findRibbonAmount(array){
  var total;
  var l = array[0], w = array[1], h = array[2];
  var small = smallest2Numbers(l,w,h);
  total = 2*small[0] + 2*small[1];
  total += l*w*h;
  return total;
}


var dimensionsList = prompt("Dimensions please?");
var dimensionsArray = setUpArray(dimensionsList);

var wrapTotal = 0;
for(var i = 0, n = dimensionsArray.length; i < n; i++){
  wrapTotal += findWrapAmount(dimensionsArray[i]);
}
alert("wrap required: "+wrapTotal);

var ribbonTotal = 0;
for(var i = 0, n = dimensionsArray.length; i < n; i++){
  ribbonTotal += findRibbonAmount(dimensionsArray[i]);
}
alert("ribbons required: "+ribbonTotal);
