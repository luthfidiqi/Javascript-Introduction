function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    // Kondisi jika nilai atau banyak data array tudak sesuai
    if (nilaiAwal > nilaiAkhir) {
      return console.log("Nilai akhir harus lebih besar dari nilai awal");
    }
    if (dataArray.length < 5) {
      return console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    }
    
    // Menentukan nilai
    let selectValue = dataArray.filter((nilai) => nilai >= nilaiAwal && nilai <= nilaiAkhir);
    selectValue = selectValue.sort(function (a, b) {
        return a - b;
    });
    // Kondisi jika nilai tidak ditemukan 
    if (!selectValue.length) {
        return console.log("Nilai tidak ditemukan");
    }
    // Mencetak nilai
    console.log(selectValue);
};

// Output 1
SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);

// Output 2
SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);

// Output 3
SeleksiNilai(4, 17 , [2, 25, 4]);

// Output 4
SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);

