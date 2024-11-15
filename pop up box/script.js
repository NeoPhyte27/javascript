alert('selamat datang...');
var lagi = true;
while( lagi === true) {
  var nama = prompt('masukkan nama:');
  alert('halo ' + nama);
  lagi = confirm('coba lagi?');
}
alert('terima kasih...');