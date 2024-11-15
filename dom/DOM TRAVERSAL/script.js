// Event Handling
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// close.addEventListener('click', function(){
//   card.style.display = 'none';
// });

// fixme : DOM traversal
// const close = document.querySelectorAll('.close');
// for ( let i = 0; i < close.length; i++){
//   close[i].addEventListener('click', function(e){
//     // close[i].parentElement.style.display = 'none';
//     e.target.parentElement.style.display = 'none';
//   });
// }

// close.forEach(function(el) {
//   el.addEventListener('click', function(e){
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// // event bubble
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//   card.addEventListener('click', function(e){
//     alert('ok');
//   });
// });




const container = document.querySelector('.container');
container.addEventListener('click', function(e){
  if ( e.target.className == 'close'){
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
});











// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling);

// info : prevent default (aksi default yang di lakukan sebuah element)
