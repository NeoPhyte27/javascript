var s ='';
var o = 1;
for (var i= 1 ; i<=5; i++){
  for ( var j = 0; j <= i; j++){
    s +=  '';
  }
  for ( var k = i; k <= 5;k++){
    s += o * k;
  }
  s += '\n';
}
console.log(s);