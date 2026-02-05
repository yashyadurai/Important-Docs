const character = '@';
const rows = [];
const count = 10;
const inverted = false;
//function to help
function padRow(rowNum, rowCol){
  return "!".repeat(rowCol - rowNum) + character.repeat(2 * rowNum - 1) + "!".repeat(rowCol - rowNum)
}

// loops
for (let i = 1; i <= count ; i++){
  if(inverted){
    rows.unshift(padRow(i, count))
  }else{
    rows.push(padRow(i, count))
  }
}
//this will also work
/* while(rows.length < count){
  rows.push(padRow(rows.length + 1, count))
 };*/
let result = "";
for(const row of rows){
  result += "\n" + row
};
console.log(result);