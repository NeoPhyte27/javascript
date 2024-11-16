// for(var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++){
//   console.log('Hello Word ' + nilaiAwal + 'x');
// }

// for(var angkotAwal = 1; angkotAwal <= 10; angkotAwal++){
//   console.log('Angkot No. ' + angkotAwal + ' berjalan dengan baik');
// }

let jmlAngkot = 10;
let angkotBeroperasi = 4;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot + ' berjalan dengan baik');
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1 ; noAngkot <= jmlAngkot; noAngkot++) {
  console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}