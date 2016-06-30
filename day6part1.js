/* OBJECTIVES
  - create a 2D array that is 1000x1000 (0-999)
    - the values of each array will be either true or false (lights on or off)
  - create an array for the instructions CHECK!
    example:
      instructions = [
                      ["off", [666,55], [986,197]],
                      ["on", [839,234], [324,64]],
                      ["toggle",[243,53], [646,324]]
                     ];
  - create a function that executes instructions.
  - create a for loop that uses that function for each instruction.
  - count how many are on (true) at the end.
*/

// VARIABLES
var instructionTypes = ["turn on","turn off","toggle"];
var instructions = stringtoArray(prompt("instructions please"));
var lights = constructLights();

// FUNCTIONS
function constructLights(){
  var array = [];
  var subarray = [];
  for(var i = 0; i < 1000; i++){
    for(var j = 0; j < 1000; j++){
      subarray.push(false);
    }
    array.push(subarray)
    subarray = [];
  }
  return array;
}


function stringSection(string,startPoint,endPoint){
  var result = ""
  for(var i = startPoint; i < endPoint; i++){
    result += string[i];
  }
  return result;
}

function stringtoArray(string){
  var step = 0;
  var done = false;
  var array = [];
  var fullArray = [];
  
  do{
    var numString = "";
    // find the instruction type
    for(var i = 0, n = instructionTypes.length; i < n; i++){
      if(stringSection(string,step,step + instructionTypes[i].length) == instructionTypes[i]){
        array.push(instructionTypes[i]);
        step += instructionTypes[i].length + 1
      }
    }
    
    // get first array of coordinates
    array[1] = [];
    for(var i = 0, n = 2; i < n; i++){
      for(var j = step, m = 3 + step; j < m; j++){
        if(string[j] != "," && string[j] != " " && string[j] != undefined){
          numString += string[j];
          step++;
        }else{
          j += 3;
        }
      }
      array[1].push(numString);
      numString = "";
      step++;
    }
    
    step += 8
    console.log(step);
    // get second array of coordinates
    array[2] = [];
    for(var i = 0, n = 2; i < n; i++){
      for(var j = step, m = 3 + step; j < m; j++){
        if(string[j] != "," && string[j] != " " && string[j] != undefined){
          numString += string[j];
          step++;
        }else{
          j += 3;
        }
      }
      array[2].push(numString);
      numString = "";
      step++;
    }
    fullArray.push(array);
    array = [];
  }while(step < string.length)
  
  return fullArray;
}

function assignState(state, array1, array2){
  for(var i = array1[0], n = array2[0]; i <= n; i++){
    for(var j = array1[1], m = array2[1]; j <= m; j++){
      lights[i][j] = state;
    }
  }
}

function toggle(array1,array2){
  for(var i = array1[0], n = array2[0]; i <= n; i++){
    for(var j = array1[1], m = array2[1]; j <= m; j++){
      if(lights[i][j] == true){
        lights[i][j] = false;
      }else if(lights[i][j] == false){
        lights[i][j] = true;
      }
    }
  }
}

function executeInstructions(inst){
  switch(inst[0]){
    case instructionTypes[0]:
      assignState(true,inst[1],inst[2]);
      break;
    case instructionTypes[1]:
      assignState(false,inst[1],inst[2]);
      break;
    case instructionTypes[2]:
      toggle(inst[1],inst[2]);
      break;
  }
}

function countLights(){
  var lightCount = 0;
  for(var i = 0; i < 1000; i++){
    for(var j = 0; j < 1000; j++){
      if(lights[i][j]){
        lightCount++;
      }
    }
  }
  return lightCount;
}

/*

---MAIN CODE---

*/
console.log(instructions);
for(var i = 0, n = instructions.length; i < n; i++){
  executeInstructions(instructions[i]);
}
console.log(countLights());
