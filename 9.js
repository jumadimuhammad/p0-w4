function checkAB(num) {
    // you can only write your code here!
    var a = 0
    var b = 0
    for (var i = 0; i < num.length; i++){
      if (num[i] == 'b'){
        for (var j = 0; j < num.length; j++){
          if (num[j] == 'a'){
            b = j-i-1
          }
        }
      }
      else if(num[i] == 'a'){
          for (var j = i; j < num.length; j++){
            if (num[j] == 'b'){
              a = j-i-1
            }
          }
      }
    }

    if(a == 3 || b == 3){
      return true
    }else{
      return false
    }
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false