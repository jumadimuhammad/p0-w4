function ubahHuruf(kata) {
    // you can only write your code here!
  var kamus = 'abcdefghijklmnopqrstuvwxyza'

  var tamp = ''
  
  for (var i= 0; i < kata.length; i ++){
    for (var j = 0; j < kamus.length-1; j ++){
      if (kata[i] == kamus[j]){
        tamp += kamus[j+1]

      }
    }
  }
  return tamp

  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu