function urutkanAbjad(str) {
    // you can only write your code here!

    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var res = ''
    for (var i = 0; i < kamus.length; i ++){
        for(var j = 0; j < str.length; j ++){
            if (kamus[i] === str[j]){
                res += str[j]
            }
        }
    }
    return res

  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'

