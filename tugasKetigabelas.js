console.log("---Tugas Ketigabelas---")

function xo(str) {
 
  var X = 0;
  var O = 0;
  
  for(var i = 0; i < str.length; i++) {
    if(str[i] === 'x') {
      X++;
    } else {
      O++;
    }
  }
  
  return X === O;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true