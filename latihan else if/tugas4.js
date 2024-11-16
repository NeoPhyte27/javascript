// let angka = prompt('masukkan angka')

// if(angka % 2 == 0){
//     alert(angka + ' adalah bilangan GENAP');
// } else if( angka % 2 == 1){
//     alert(angka + ' adalah bilangan GANJIL')
// } else{
//     alert('yang anda masukkan bukan angka!')
// }

let jmlAngkot = 10;
let sedangBeroperasi = 6;
let sedangLembur = 8;

for(let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= sedangBeroperasi){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    } else if(noAngkot === sedangLembur){
        console.log('Angkot No ' + noAngkot + ' sedang lembur.')
    } else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi. ')
    }
}