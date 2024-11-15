// // kenapa object
// let namaMhs = 'MUHAMMAD ALDI RIZKY PRATAMA';
// let umurMhs = '22';
// let lulus = true;
// let IPSemester = [2.90, 3.10, 3.25, 2.88, 3.04];

// function IPKumulatif(IPSemester){
//   let total = 0;
//   for( let i = 0; i < IPSemester.length; i++){
//     total += IPSemester[i];
//   }
//   return total/IPSemester.length;
// } //dengan array

// // object sesungguhnya
// let mahaSiswa ={
//   nama : 'MUHAMMAD ALDI RIZKY PRATAMA',
//   lulus : true,
//   IPSemester : [2.90, 3.10, 3.25, 2.88, 3.04],
//   IPKumulatif : function(){
//     let total = 0;
//     let ips = this.IPSemester;
//     for( let i = 0; i < ips.length; i++){
//       toal += ips[i];
//     }
//     return total/ips.length;
//   }
// }
// mahaSiswa.IPKumulatif();

// // anatomi object
// let Orang = {
//   nama : 'MUHAMMAD ALDI RIZKY PRATAMA',//------v
//   umur : 22,                           //---->properti
//   pekerjaan : 'Mahasiswa',             //-----^
//   sapa : function(){//function yang ada di dalam object adalah method
//     return 'Hi, nama saya ' + this.nama + ' usia saya ' + this.umur + ' tahun, dan saya adalah seorang ' + this.pekerjaan;
//   }
// }

// // membuat object
// let mhs = {
//   nama : 'MUHAMMAD ALDI RIZKY PRATAMA',
//   umur : 22,
//   ips : [3.00, 2.50, 3.20],
//   alamat : {
//     jalan : 'Simpang Tugu',
//     kota : 'rokan hilir',
//     provinsi : 'riau'
//   }
// };
// dari atas sampai sini adalah *OBJECT LITERAL*
//------------------------------------------------

// membuat object
// // object literal
// let mhs1 = {
//   nama : 'MUHAMMAD ALDI RIZKY PRATAMA',
//   nim : '2055201096',
//   email : 'aldijinkpro27@gmail.com',
//   jurusan : 'Teknik Informatika'
// }
// let mhs2 = {
//   nama : 'MUHAMMAD ALDI',
//   nim : '20552010',
//   email : 'aldijinkpro27@gmail.com',
//   jurusan : 'Teknik Informati'
// }

// function declaration
// function buatObjectMahasiswa(nama,nim,email,jurusan){
//   let mhs = {};//deklarasi object
//   mhs.nama = nama;
//   mhs.nim = nim;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }

// let mhs3 = buatObjectMahasiswa('ALdirisky','2055201097','aldijinkpro27@gmail.com','Teknik Informatika');

// // Contructor ( khusus buat object)
// function Mahasiswa(nama,nim,email,jurusan){
//   //anggap ada let this = {}'
//   this.nama = nama;
//   this.nim = nim;
//   this.email = email;
//   this.jurusan = jurusan;
//   // anggap ada return this;
// }

// let mhs4 = new Mahasiswa('ALdirisky','2055201097','aldijinkpro27@gmail.com','Teknik Informatika')//harus menggunakan keyword ( new )

// membuat object
// // cara 1 function declaration
// function halo(){
//   console.log(this);
//   console.log('halo');
// }
// this.halo();
// // this mengembalikan object global

// // cara 2 - object literal
// let obj ={a : 10, nama : 'aldirisky'};
// obj.halo = function(){
//   console.log(this);
//   console.log('halo');
// }
// obj.halo();
// // this mengembalikan object yang bersangkutan

// // cara 3 - Constructor(keyword new)
// function Halo() {
//   //biasakan objectnya dengan huruf besar di awal biar menandakan menggunakan object contructor
//   console.log(this);
//   console.log('halo');
// }
// let obj1 = new Halo();
// let obj2 = new Halo();
// // this mengembalikan object yang baru dibuat
