// var myPhone = {
//     'jumlah aplikasi' : 10
// }

// myPhone.merk = 'ass'
// myPhone.umur = 2
// myPhone.batray= 4200
// myPhone.screen = 4.2
// console.log(myPhone)
// myPhone.merk = 'Acer'

// myPhone.color = 'black'
// console.log(myPhone)

// myPhone['kura-kura'] = false
// myPhone['merk'] = 'asus'
// myPhone['tempat beli'] = 'jakarta'

// // console.log(myPhone)


// var myCat = {
//     name : 'Luffy',
//     age: 4
// }

// var warna = 'color'

// myCat[warna] = 'cream'

// console.log(myCat)

// var status = 1

// myCat[status] = 'hilang' // mencari variable status

// console.log(myCat)



// var scores = [
//   {
//     name: "Yoyok",
//     score: 100
//   },
//   {
//     name: "Fadhil",
//     score: 95
//   },
//   {
//     name: "Jumadi",
//     score: 100
//   },
//   {
//     name: "Audrick",
//     score: 40
//   },
//   {
//     name: "Ayu",
//     score: 55
//   }
// ];

// function getScore(input) {
//   var obj = {
//     passed: [],
//     failed: [],
//     average: 0
//   };
//   for (var i = 0; i < input.length; i++) {
//     if (input[i].score >= 60) {
//       obj.passed.push(input[i].name);
//     } else {
//       obj.failed.push(input[i].name);
//     }
//     obj.average += input[i].score;
//   }
//   obj.average /= input.length;
//   return obj;
// }

// console.log(getScore(scores));


var str = ['z', 'a', 'c', 'w', 'f', 'b', 'd']

for (var i =0; i< str.length; i ++){
  for (var j = i+1; j < str.length; j++){
    if (str[i] < str[j]){
      var temp = str[i]
      str[i] = str[j]
      str[j]= temp
    }
  }
  
}


console.log(str)