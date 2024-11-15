// fixme : Cara untuk membuat Object pada Javascript
// info : 1. Object Literal
// let mahasiswa1 = {
//   nama: 'Aldirisky Pratama',
//   energi: 10,
//   makan: function(porsi){
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan!`);
//   },
// };

// info : 2. Function Declaration
// const methodMahasiswa = {
// makan: function (porsi){
//       this.energi += porsi;
//             console.log(`Halo ${this.nama}, Selamat Makan!` );
// },
// main: function(jam){
//       this.energi -= jam;
//       console.log(`Halo ${this.nama}, Selamat Bermain!` );
//       },
// tidur: function(jam){
//       this.energi += jam  * 2;
//       console.log(`Halo ${this.nama}, Selamat Tidur!!` );
// }
// }

// function Mahasiswa(nama, energi){
//       let mahasiswa = {};
//       mahasiswa.nama = nama;
//       mahasiswa.energi = energi;
//       mahasiswa.makan = methodMahasiswa.makan;
//       mahasiswa.main = methodMahasiswa.main;
//       mahasiswa.tidur = methodMahasiswa.tidur;
      
//       return mahasiswa;
// }

// let aldi = Mahasiswa('aldirisky', 10);


// -------------------------------------//
// function Mahasiswa(nama, energi){
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function(porsi){
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan!` );
//   }

//   mahasiswa.main = function(jam){
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain!` );
//   }

//   return mahasiswa;
// }

// let aldi = Mahasiswa('Aldirisky', 10);

// info : 3. Constructor Function
// function Mahasiswa(nama, energi){
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function(porsi){
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan!` );
//   }

//   this.main = function(jam){
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat Bermain!` );
//   }
// }

// let aldi = new Mahasiswa('Aldirisky', 10)



// info : 4. Object.create
// const methodMahasiswa = {
//       makan: function (porsi){
//             this.energi += porsi;
//                   console.log(`Halo ${this.nama}, Selamat Makan!` );
//       },
//       main: function(jam){
//             this.energi -= jam;
//             console.log(`Halo ${this.nama}, Selamat Bermain!` );
//             },
//       tidur: function(jam){
//             this.energi += jam  * 2;
//             console.log(`Halo ${this.nama}, Selamat Tidur!!` );
//       }
//       }
//       function Mahasiswa(nama, energi){
//             let mahasiswa = Object.create(methodMahasiswa);
//             mahasiswa.nama = nama;
//             mahasiswa.energi = energi;

//             return mahasiswa;
//       }
//       let aldi = Mahasiswa('aldirisky', 10);



 // prototype

      function Mahasiswa(nama, energi){
            // let mahasiswa = Object.create(methodMahasiswa);
            // let mahasiswa = {};
            // let this = Object.create(Mahasiswa.prototype);
            this.nama = nama;
            this.energi = energi;

            // return mahasiswa;
            // return this;
      }

      Mahasiswa.prototype.makan = function(porsi){
            this.energi += porsi;
            return `Halo ${this.nama}, Selamat Makan!`;
      }

      Mahasiswa.prototype.main = function(jam){
            this.energi -= jam;
            return `Halo ${this.nama}, Karna Kamu Bermain Jadi Di kurangi dan Selamat Bermain`;
      }

      Mahasiswa.prototype.tidur = function(jam){
            this.energi += jam * 2;
            return `Halo ${this.nama}, Karna kamu tidur dapat energi baru`;
      }

      let aldi = new Mahasiswa('aldirisky', 10);