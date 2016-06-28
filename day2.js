/*
TODOS:
- convert list into a usable array. CHECK!
- create a function.
  - finds surface area.
  - finds smallest side.
    - adds that value to the total surface area.
- use array in function.
  - also keep track of total surface area
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


var dimensionsList = prompt("Dimensions please?");
var dimensionsArray = setUpArray(dimensionsList);

