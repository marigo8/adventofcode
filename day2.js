/*
TODOS: CHECK!
- convert list into a usable array. CHECK!
- create a function. CHECK!
  - finds surface area. CHECK!
  - finds smallest side. CHECK!
    - adds that value to the total surface area. CHECK!
- use array in function. CHECK!
  - also keep track of total surface area CHECK!
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

function findWrapAmount(array){
  var l = array[0], w = array[1], h = array[2];
  var side0 = l*w, side1 = w*h, side2 = h*l;
  
  var subtotal = 2*side0 + 2*side1 + 2*side2;
  
  var total = subtotal + smallestSide(side0,side1,side2);
  return total;
}


var dimensionsList = prompt("Dimensions please?");
var dimensionsArray = setUpArray(dimensionsList);

var wrapTotal = 0;
for(var i = 0, n = dimensionsArray.length; i < n; i++){
  wrapTotal += findWrapAmount(dimensionsArray[i]);
}
alert(wrapTotal);
