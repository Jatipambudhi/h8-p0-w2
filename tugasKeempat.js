console.log("-----Tugas Keempat-----")

var tanggal = 21; 
var bulan = 9; 
var tahun = 1945;

switch(bulan){
  case 1:
    console.log(tanggal + " Januari " + tahun)
    break;
  case 2:
    console.log(tanggal + " Februari " + tahun)
    break;
  case 3:
    console.log(tanggal + " Maret " + tahun)
    break;
  case 4:
    console.log(tanggal + " April " + tahun)
    break;
  case 5:
    console.log(tanggal + " Mei " + tahun)
    break;
  case 6:
    console.log(tanggal + " Juni " + tahun)
    break;
  case 7:
    console.log(tanggal + " Juli " + tahun)
    break;
  default:
    console.log("Mohon maaf, bulan ini tidak tersedia dalam kalender")
    break;
}