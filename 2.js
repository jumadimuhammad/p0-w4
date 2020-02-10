function fpb(angka1, angka2) {
    // you can only write your code here!
    var satu = []
    var dua = []
    var satuDua = []
    for( var i = 0; i < angka1; i ++){
        if (angka1 % i == 0){
            satu.push(i)
        }
    }

    for (var j = 0; j < angka2; j++){
        if (angka2 % j == 0){
            dua.push(j)
        }
    }

    for (var k = 0; k < satu.length; k++){
        for(var l = 0; l < dua.length; l ++){
            if (satu[k] == dua[l]) {
                satuDua.push(dua[l])
            }
        }
    }
    
    var hasil = satuDua.pop()
    return hasil

  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1