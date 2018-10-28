console.log("-----Tugas Kesebelas-----")

function konversiMenit(menit) {
  var mins = Math.floor(menit / 60);
  var secs = menit % 60;
  if (secs < 10) {
    return mins + ':' + 0 + secs;
  } else {
    return mins + ':' + secs;
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00