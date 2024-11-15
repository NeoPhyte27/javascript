// fixme : manipulation Element
// note : mengubah isi dari sebuah tag yang sudah di seleksi
// todo : element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Aldirisky Pratama';
// judul.style.textAlign = 'center';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';

// note : mengubah style atau css dari element yang sudah di seleksi
// todo : element.style.<propertiCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// todo : element.setAttribute() -> menambahkan atribut baru dari tag element
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'aldirisky');
// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// note : hanya bisa di console yang sudah di setAttribute()
// todo : element.getAttribute()->mengetahui isi dari sebuat atribut
// a.getAttribute('href');
//judul.getAttribute('judul')
// todo : element.removeAttribute()->menghilangkan sebuah atribut
// a.removeAttribute('href');

// note : mengelola class yang ada di tag dan hanya bisa di console
// todo : element.classList()
// const p2 = document.querySelector('.p2');
// info : element.classList.add() -> menambah class baru
// p2.classList.add('label');
// p2.classList.add('satu'); //1
// p2.classList.add('dual'); //2
// p2.classList.add('tiga'); //3
// info : element.classList.remove() ->menghilangkan class yang ada
// p2.classList.remove('label');
// info : element.classList.toggle() -> menambahkan class tertentu atau menghilangkan class tertentu
// p2.classList.toggle('label'); //jika ada akan false jika tidak akan true(boolean)
// info : element.classList.item() -> mengetahui nama class pada sebuah element
// p2.classList.item(2);//mecari item class yang di dalam class dengan index
// info : element.classList.contains() -> mengecek sebuah element class tertentu
// p2.classList.contains('dua');//mencari element yang ada di class jika true berarti ada, jika false berarti tidak ada (boolean)
// info : element.classList.replace() -> mengganti class yang ada menjadi yang baru
// p2.classList.replace('tiga', 'empat'); //p2.classList.replace('namaClass', 'replaceClass')

// ------------------------------------------------------------------//
// fixme : manipulation Node
// info : membuat element baru atau tag baru
// todo : document.createElement()
const pBaru = document.createElement('p'); //membuat element dahulu

// info : menulis text di element
// todo : document.createTextNode()
const teksPbaru = document.createTextNode('Paragraf Baru'); //apa isi teks dari element tadi

// info : disimpan nya textnya dari create element dan create text node
// todo : node.appendChild()
pBaru.appendChild(teksPbaru); //gabungkan create elemennya dan text nya
const sectionA = document.getElementById('a'); //letakkan dimana mau disimpan
sectionA.appendChild(pBaru); //munculkan elementnya


// info : memasukkan element
// todo : node.insertefore()
// info : masukkan list item baru kebagian yang di inginkan
// membuat elementnya terlebih dahulu
const liBaru = document.createElement('li');
// membuat teks untuk elemennya
const teksLiBaru = document.createTextNode('Item Baru');
// gabungkan elementnya dan teksnya
liBaru.appendChild(teksLiBaru);
// mengambil datanya
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2');
// rangkai semuanya
ul.insertBefore(liBaru, li2);//insertBefore(data barunya, data lamanya)


// info : menghapus parent atau element
// todo : parentNode.removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// info : mengganti parent atau element
// todo : parentNode.replaceChild()
const sectionB = document.getElementById('b');//cari elemetn tag id
const p4 = sectionB.querySelector('p'); //cari element yang di tag id
const h2Baru = document.createElement('h2'); //buat element baru
const teksH2Baru = document.createTextNode('Judul Baru!'); // apa namanya texs di element baru
h2Baru.appendChild(teksH2Baru);//gabungkan create elemen dan text element
sectionB.replaceChild(h2Baru, p4);//replaceCHild(node baru, node lama)

// hack : belajar lagi
// create element
const pBaruu = document.createElement('p');
// create text dalam element
const textPbaruu = document.createTextNode('Penambahan paragraf baru');
// gabungkan element dan text
pBaruu.append(textPbaruu);
// ambil element yang mau di masukkan
const sectionC = document.querySelector('.biruu');
// gabungkan element
sectionC.appendChild(pBaruu);

pBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
pBaruu.style.backgroundColor = 'lightgreen';

// ------------------------------------------------------------------//
// fixme : manipulasi Node ( method Baru)
//  info : parentNode.append()->menambahkan element di akhir sebuah parent

//  info : parentNode.prepend()->menambahkan element di awal sebuah parent
//  info : childNode.before()->menambahkan parent baru di sebelum element
//  info : childNode.after()-> menambahkan parent baru di sesudah element
//  info : childNode.remove()-> menghapus parent
//  info : childNode.replaceWith()-> mengganti parent