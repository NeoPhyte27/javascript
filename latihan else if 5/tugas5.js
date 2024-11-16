let jmlAngkot = 10;
let angkotBerperasi = 6;

for(let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBerperasi){
        console.log('Angkot No. ' +  noAngkot + ' beroperasi dengan baik');
    }else if(noAngkot === 8 || noAngkot=== 10){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi');
    }
}

// atau
/*
let jmlAngkot = 10;
let angkotBerperasi = 6;
for(let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBerperasi){
        console.log('Angkot No. ' +  noAngkot + ' beroperasi dengan baik');
    }else if(noAngkot === 8 || noAngkot=== 10){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    }else if(noAngkot === 10{ 
            console.log('Angkot No. ' + noAngkot + ' sedang lembur');        
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi');
    }
}
*/