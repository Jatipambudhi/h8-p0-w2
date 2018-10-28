console.log("-----Tugas Keenam-----")

console.log("-- 1 (While Loops) --")

console.log("LOOPING PERTAMA")
var start = 2
while(start <= 20){
  console.log(start + " - I love coding")
  start = start + 2
}

console.log("LOOPING KEDUA")
var startDua = 20
while(startDua > 0){
  console.log(startDua + " - I will become fullstack developer")
  startDua = startDua - 2
}

console.log("-- 2 (For Loops) --")

console.log("LOOPING PERTAMA")
for(var i = 1; i < 20; i++){
  console.log(i + " - I love coding")
}
console.log("LOOPING KEDUA")
for(var i = 20; i > 0; i--){
  console.log(i + " - I will become fullstack developer")
}

console.log("-- 3 Counter dan Kelipatan --")

console.log("-- Counter + 1 --")
for(var i = 1; i <= 100; i++){
  if(i % 2 == 0){
    console.log(i + " Genap")
  } else {
    console.log(i + " Ganjil")
  }
}

console.log("-- Kelipatan 3 --")
for(var i = 1; i <= 100; i = i+2){
  if(i % 3 == 0 ){
    console.log(i + " Kelipatan 3")
  } else {
    console.log(" ")
  }
}

console.log("-- Kelipatan 6 --")
for(var i = 1; i <= 100; i = i+5){
  if(i % 6 == 0){
    console.log(i + " Kelipatan 6")
  } else {
    console.log(" ")
  }
}

console.log("-- Kelipatan 10 --")
for(var i = 1; i <= 100; i = i+9){
  if(i % 10 == 0){
    console.log(i + " Kelipatan 10")
  } else {
    console.log(" ")
  }
}