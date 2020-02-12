function shoppingTime(memberId, money) {
    // you can only write your code here!

    if (memberId == 0 || money == null){
      return 'Mohon Maaf toko X hanya berlaku untuk member saja'

    }else if (money < 50000){
      return 'Mohon maaf, uang tidak cukup'
    }

    var hasil = {
        memberId:memberId,
        money:money,
        listPurchased:[],
        changeMoney:money
    }

    // var barang = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
    // var harga = [1500000, 500000, 250000, 175000, 50000]

    // while (hasil.changeMoney >= 0){

    // }

    var barang = [
    {
      merk: 'Sepatu Stacattu',
      harga:1500000

    },
    {
      merk: 'Baju Zoro',
      harga:500000
    },
    {
      merk: 'Baju H&N',
      harga:250000
    },
    {
      merk: 'Sweater Uniklooh',
      harga: 175000
    },
    {
      merk: 'Casing Handphone',
      harga:50000
    }
  ]

   // var barang = [['sepatu stacatuut', 1500000],['Baju Zoro', 500000],['Baju H&N', 250000], ['Sweater Uniklooh', 175000], ['Casing Handphone', 50000]]

    for (var i = 0; i<barang.length; i++){
      if(hasil.changeMoney >= barang[i].harga) {
        hasil.listPurchased.push(barang[i].merk)
        hasil.changeMoney -= barang[i].harga
      }
    }

    return hasil


  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja