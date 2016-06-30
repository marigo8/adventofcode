/*NOTES
OBJECTIVES:
- separate strings into an array
- Check if "nice" string
  Nice strings have ALL of the following properties (AND):
  - has a pair of two letters that repeat without overlapping.
  - has double letters with one letter inbetween
    - check if each letter is the same as the letter 2 steps after it.
  I may have to have two separate for loops for each of the properties
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

function checkForRule1(string){
  var followsRule = false;
  for(var i = 0, n = string.length; i < n; i++){
    for(var j = 0, m = string.length; j < m; j++){
      if(i != j && i + 1 != j && j + 1 != i){
        if(string[i]+string[i + 1] == string[j]+string[j + 1]){
          followsRule = true;
        }
      }
    }
  }
  return followsRule;
}

function checkForRule2(string){
  followsRule = false;
  for(var i = 0, n = string.length; i < n; i++){
    if(string[i] == string[i + 2]){
      followsRule = true;
    }
  }
  return followsRule;
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
  if(checkForRule1(strings[i]) && checkForRule2(strings[i])){
    niceStrings[i] = strings[i];
    niceCount++;
  }
}
console.log(niceCount);
