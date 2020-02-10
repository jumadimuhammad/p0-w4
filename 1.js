function angkaPrima(angka) {
    // you can only write your code here!
    var res = []
    var hasil = false
    for (var i = 1; i <= angka; i++){
        if (angka % i == 0){
            res.push(i)
        }
    }

    console.log(res)
    if (res.length == 2){
        hasil = true
    }

    return hasil
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false