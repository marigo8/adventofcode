var dimensionsList = prompt("Dimensions please?");

//test
for(var i = 0, n = dimensionsList.length; i < n; i++){
  if(dimensionsList[i] == " "){
    alert("found an space at "+i);
    break;
  }
}
