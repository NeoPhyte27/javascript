let penumpang =[];
let tambahPenumpang = function(namaPenumpang, penumpang){
  // jika angkot kosong
  if( penumpang.length == 0 ){
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  }else {
    // telusuri seluruh kursi dari awal
    for ( let i = 0; i < penumpang.length; i++){
      // jika ada kursi kosong
      if( penumpang[i] == undefined){
        // tambah penumpang di kursi tersebut
        penumpang[i] =namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if( penumpang[i] == namaPenumpang ){
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + ' Sudah Ada Di Dalam Angkot.');
        // lembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika seluruh kursi terisi
      else if( i == penumpang.length - 1){
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
}
// disaat turun
let hapusPenumpang = function(namaPenumpang, penumpang){
  // jika angkot kosong
  if ( penumpang.length == 0){
    // tampilkan pesan bahwa angkot kosong, dan
    // kembalikan isi array & keluar dari function
    console.log('Angkot masih Kosong.');
// else
  } else{
  // telusuri seluruh kursi dari awal
    // jika nama penumpang sesuai
    for ( let i = 0; i < penumpang.length; i++){
      // hapus penumpang dengan mengubah namanya,
      if( penumpang[i] == namaPenumpang){
      // menjadi undefined
        penumpang[i] = undefined;
      // kembalikan isi array & keluar dari function
        return penumpang;
    // jika tidak ada nama yang sesuai
      } else if( i == penumpang.length - 1){
      // tampilkan pesan kesalahannya
        console.log(namaPenumpang + ' tidak ada di dalam Angkot.');
      // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
    // tidak mungkin ada penumpang turun
  return penumpang;
}