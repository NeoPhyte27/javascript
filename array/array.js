// let hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at','Sabtu','Minggu'];

// console.log(hari.length)

// let myArr3 = ['teks',2,false,[4,5,6]];
// console.log(myArr3[3][1]);

// let hari = ['Senin','Selasa','Rabu']; //type string
// let angka = [10,123,2004]; //type integer
// let boolean = [false, true]; //type boolean
// let myFunc = function(){ 
//   alert('Hello World!');
// }; //type function expression
// let myArr2 = [myFunc]; //dalam array ada function
// let myArr3 = [[4,5,6]]; //array dalam array
// let myArr4 = ['teks',2,false,myFunc,[4,5,6]]; //semua bisa di gabung

// manipulasi array
// //menambah isi array
// let arr = [];
//   arr[0] = 'Aldirisky';
//   arr[1] = 'pratama';
//   arr[3] = 'S.Kom'; //arr[2] akan undifined karna belum di isi
// console.log(arr);

// // menghapus isi array
// let arr = ["Aldirisky", "Pratama", "S.Kom"];
//   arr[2] = undefined;//menggunakan secara manual untuk menghapusnya
// console.log(arr);

// menampilkan isi array
// let arr = ["Aldirisky", "Pratama", "S.Kom", "gass"];

// for( var i = 0; i < arr.length; i++){
//   console.log('Mahasiswa ke-' + (i+1) + ' :' + arr[i]);
// }

// method pada array
// join
// let arr = ["MUHAMMAD","ALD","RIZKY", "PRATAMA", ".S.Kom"];
// console.log(arr.join(' '));

// push & pop
// arr.push('.M.Kom', "kamu"); //menambahkan element baru di akhir dalam array dan bisa di tambah beberapa element
// arr.pop();//menghapus element akhir dalam array
// console.log(arr.join(' '));

// // unshift dan shift
// arr.unshift('Dr');//menambahkan element baru di awal dalam array dan bisa di tambah beberapa element
// arr.shift();//menghapus element awal dalam array
// console.log(arr.join(' '));

// // splice
// let arr = ["MUHAMMAD","ALD","RIZKY", "PRATAMA", ".S.Kom"];
// arr.splice(1,1,"ALDI");
// console.log(arr.join(' '));

// // slice
// let arr = ["MUHAMMAD","ALDI","RIZKY", "PRATAMA", ".S.Kom"];
// let arr2 = arr.slice(1,3);//pratama tidak ikut karna dia array akhir yang di slice
// console.log(arr2.join(' '));

// foreach
// let angka = [1,2,3,4,5,6,7,8,9,10];
// let nama = ['Aldirisky', 'Pratama'];

// for( let i = 0; i < nama.length; i++){
//   console.log(nama[i]);
// }
// angka.forEach(function(e){
//   console.log(e);
// });

// // map
// let angka = [1,2,3,4,5,6,7,8,9,10];
// let angka2 = angka.map(function(e){
//   return e * 2;
// });

// console.log(angka2.join(' '))

// // sort
// let angka = [1,2,3,4,5,6,7,8,9,10]; //caution tentang puluhan atau ratusan
// angka.sort(function(a,b){
//   return a-b; //mengurutkan jika ada puluhan dan ratusan
// });
// console.log(angka.join(' '))

// // filter
// let angka = [1,2,3,4,5,6,7,8,9,10];
// let angka2 = angka.filter(function(x){
//   return x > 5;
// });

// console.log(angka2.join(' '));

// // find
// let angka = [1,2,3,14,16,12,4,20,5,13,6,7,8,9,10];
// let angka2 = angka.find(function(x){
//   return x > 5; //kurang dari index 5
// });

// console.log(angka2);

// array method
// length ( berapa jumlah element pada arraya)
// join ( menggabungkan seluruh isi array menjadi string)
// Push ( menambahkan di akhir element pada array )
// pop ( menghapus di akhir element pada array ) 
// unshift ( menambahkan di awal element pada array )
// shift ( menghapus di awal element pada array )
// slice ( mengambil element yang ada di array(awal, akhir))
// splice ( menambah element baru dan juga memhapus elemtnya( IndexAwal, ElementDihapus, Element1.. Elementn))
// ForEach ( pengulangan )
// map ( mengembalikan array )
// sort ( mengurutkan isi array )
// filter ( mengembalikan banyak nilai )
// find ( mengembalikan satu nilai )