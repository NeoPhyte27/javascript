// // fixme : event Handler
// // todo : onclick
// // inline html
// const p3 = document.querySelector('.p3');
// function ubahWarnaP3(){
//   p3.style.backgroundColor = 'lightblue'
// }

// // dengan method element
// const p2 = document.querySelector('.p2');
// function ubahWarnaP2(){
//   p2.style.backgroundColor = 'lightblue'
// }
// p2.onclick = ubahWarnaP2;

// // ------------------------------------------------------------//
// //todo : addEventListenenr()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//   const ul = document.querySelector('section#b ul');
//   const liBaru = document.createElement('li');
//   const teksLiBaru = document.createTextNode('item Baru');
//   liBaru.appendChild(teksLiBaru);
//   ul.appendChild(liBaru);
// });//tulis 2 buah parameter

const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//   p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
//   p3.style.color = 'red';
// }

p3.addEventListener('mouseenter', function(){
  p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('mouseleave', function(){
  p3.style.backgroundColor = 'lightgreen';
});