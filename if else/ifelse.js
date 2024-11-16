// var angka = prompt('masukkan angka : ');
// if( angka % 2 == 0) {
//   alert(angka + ' adalah bilangan GENAP');
// } else {
//   alert(angka + ' adalah bilangan GANJIL');
// }

let jmlAngkot = 10;
let angkotBeroperasi = 6;

for(let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
  if(noAngkot <= angkotBeroperasi){
    console.log('Angkot No. ' + noAngkot + ' beroperasi')
  } else {
    console.log('Angkot No ' + noAngkot + ' sedang tidak beroperasi')
  }
}