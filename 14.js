function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    var obj = []

    for (var i = 0; i < arrPenumpang.length; i ++){
      for(var j = 0; j < rute.length; j ++){
        for(var k = 0; k < rute.length; k ++){
          if (arrPenumpang[i][1] == rute[j] && arrPenumpang[i][2] == rute[k]){
            obj.push({
              penumpang : arrPenumpang[i][0],
              naikDari  : arrPenumpang[i][1],
              tujuan    : arrPenumpang[i][2],
              bayar     : (k-j) * 2000
            })
          }
        }
     }
    }
    return obj
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]