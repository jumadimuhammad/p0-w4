function cariMedian(arr) {
    // you can only write your code here!
    var hasil = 0
    if (arr.length % 2 != 0){
        var satu = (arr.length- 1)/2
        hasil = 'Median : ' + arr[satu]
    }else{
        var dua = arr.length/2
        hasil = 'Median : ' + (arr[dua-1] + arr[dua])/2
    }
    return hasil
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5