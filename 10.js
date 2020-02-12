function changeMe(arr) {

  for ( var i = 0; i < arr.length; i ++){
    var obj = {
      firstName : arr[i][0],
      lastName  : arr[i][1],
      gender    : arr[i][2]
    }
   
    if (arr[i][3] == null){
      obj.age = 'Invalid Birth Year'
    } else{
      obj.age = 2020 -arr[i][3]
    }
    console.log(i+1+'. ' + obj.firstName + ' ' + obj.lastName + ':')
    console.log(obj)
  }

  
    return ''

  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""