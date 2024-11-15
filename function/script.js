// let a = 8;
// let b = 3;
// let volumeA;
// let volumeB;
// let total;

// volumeA = a**3;
// volumeB = b**3;

// total = volumeA + volumeB;

// console.log(total);

// function jumlahVolumeDuaKubus(a, b){
//   let volumeA;
//   let volumeB;
//   let total;

//   volumeA = a**3;
//   volumeB = b**3;

//   total = volumeA + volumeB;

//   return total;
// }


// argument dan parameter
// function tambah(a,b){
//   return a + b;
// }

// let a = parseInt(prompt('Masukkan Nilai 1 :'));
// let b = parseInt(prompt('Masukkan Nilai 2 :'));

// let hasil = tambah(a**3,b**3);
// alert(hasil);

// function tambah(a,b){
//   return a + b;
// }

// function kali(a,b){
//   return a * b;
// }

// let hasil = kali(tambah(1,2), tambah(3,4));

// alert(hasil);

// function tambah(a,b,c){
//   return a+b;
// }

// let a = parseInt(prompt('Masukkan Nilai 1 :'));
// let b = parseInt(prompt('Masukkan Nilai 2 :'));

// let coba = tambah(a,b);
// alert(coba);

// // arguments
// function tambah(){
//   let hasil = 0;
//    for ( let i = 0; i < arguments.length; i++){
//     hasil += arguments[i];
//    }
//    return hasil;
// }

// let coba = tambah(1,2,3,7);
// console.log(coba);

// refactoring (penulisan kode lebih efisien)
// function jumlahVolumeDuaKubus(a, b){
//   return a**3 + b**3;
// }

// alert(jumlahVolumeDuaKubus(8,3));

// function scope
// global scope / window scope
// let a = 1;

// function tes(){

// }

// tes();


// rekursif
// function tampilAngka(n){
//   if( n === 0) return;
//   console.log(n);
//   return tampilAngka(n-1);
// }

// tampilAngka(10);

// function faktorial(n){
//   if ( n === 0) return 1;
//   return n * faktorial(n-1);
// }

// console.log(faktorial(5));

// function declaration vs function expression

