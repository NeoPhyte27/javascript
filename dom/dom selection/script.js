// note : DOM SELECTION
// // document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Aldirisky Pratama';

// // document.getElementsByTagName() -> HTMLCollections
// const p = document.getElementsByTagName('p');
// for ( let i = 0; i < p.length; i++){
//   p[i].style.backgroundColor = 'lightblue';
// }

// // document.getElementsByTagName() -> HTMLCollections
// const h1 = document.getElementsByTagName('h1')[0]; //menggunkan index
// h1.style.fontSize = '50px';

// // document.getElementsByClassName() -> HTMLCOllections
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari javascript';

// // document.querySelector() -> element ( jika harus menggunakan query tanpa merubah html)
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // document.querySelectorAll() -> nodelist ( jika harus menggunakan query tanpa merubah html)
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'lightblue';
// }


// node root (document)
// // const p4 = document.getElementsByTagName('p');
// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';

// // menggunakan node root
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';


const button = document.querySelector('button');
const h1 = document.getElementById('judul');

button.addEventListener('click', function(){
      h1.style.backgroundColor = '#ccc';
      h1.innerHTML = 'Aldirisky Pratama';
      return button;
});

const p = document.getElementsByTagName('p');
for ( let i = 0; i < p.length; i++){
      p[i].style.backgroundColor = 'lightblue';
}
const ul = document.querySelector('section#b ul');
const li = ul.querySelectorAll('li');

const tambahLi = document.createElement('li');
const textLi = document.createTextNode('Sama-Sama Belajar');
tambahLi.appendChild(textLi);
ul.appendChild(tambahLi);

for ( let i = 0; i < li.length; i++){
      li[i].style.backgroundColor = '#ccc'
}