/*NOTES
OBJECTIVES:
- separate strings into an array
- Check if "nice" string
  Nice strings have ALL of the following properties (AND):
  - at least 3 variables (aeiou)
  - at least 1 char twice in a row
  - does not contain ab, cd, pq, or xy
- Count number of "nice" strings
*/

// FUNCTIONS
function stringToArray(string){
  var slot = "";
  var array = [];
  for(var i = 0, n = string.length; i < n; i++){
    if(string[i] == " "){
      array.push(slot);
      slot = "";
    }else{
      slot += string[i];
    }
  }
  if(string[string.length - 1] != " "){
    array.push(slot);
  }
  return array;
}

function isOneOf(string,array){
  for(var i = 0, n = array.length; i < n; i++){
    if(string == array[i]){
      return true;
    }
  }
  return false;
}

function checkIfNice(string){
  var vowelCount = 0;
  var hasDouble = false;
  var hasTabooStrings = false;
  var concat;
  for(var i = 0, n = string.length; i < n; i++){
    concat = (string[i] + string[i + 1]) || string[i];
    if(isOneOf(string[i],vowels)){
      vowelCount++;
    }
    if(string[i] == string[i + 1]){
      hasDouble = true;
    }
    if(isOneOf(concat,taboos)){
      hasTabooStrings = true;
    }
  }
  if(vowelCount >= 3 && hasDouble == true && hasTabooStrings == false){
    niceStrings.push(string);
    return true;
  }else{
    return false;
  }
}

// VARIABLES
var strings = stringToArray(prompt("List please."));
var niceStrings = [];
var niceCount = 0;
var vowels = ["a","e","i","o","u"];
var taboos = ["ab","cd","pq","xy"];

/*
---MAIN CODE---
*/

for(var i = 0, n = strings.length; i < n; i++){
  niceCount += checkIfNice(strings[i]);
}
