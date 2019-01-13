console.log("---Tugas Ketujuh---")

console.log("-- 1 --")

var rowsOne = 5

for(var i = 0; i < rowsOne; i++){
  console.log("*")
}

console.log("-- 2 --")

var star = '*';
var rowsTwo = 5;

while(rowsTwo > 0){
  while(star.length < rowsTwo){
    star += '*';
    star.length ++;
  }
  console.log(star);
  rowsTwo = rowsTwo - 1;
}

console.log("-- 3 --")

var star ='*';
var rowsThree = 5;

for(var starRow = star.length; starRow <= rowsThree; starRow++){
    console.log(star);
    star += "*";
}