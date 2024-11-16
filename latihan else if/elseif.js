var jmlAngkot = 10;
var sedangBeroperasi = 6;
var sedangLembur = 8;
for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if(noAngkot <= sedangBeroperasi){
    console.log('Angkot No. ' + noAngkot + ' Beroperasi Dengan Baik.');
  } else if(noAngkot === sedangLembur){
    console.log('Angkot No. ' + noAngkot + ' Sedang Lembur');
  } else{
    console.log('Angkot No. ' + noAngkot + ' Sedang Tidak Beroperasi' )
  }
}