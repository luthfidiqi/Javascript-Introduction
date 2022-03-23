// PART 3 - TASK 1

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// A. then catch
cekHariKerja("sabtu")
  // then berisi perintah apabila kondisi pada fungsi sesuai.
  .then((result) => {
    console.log(result);
  })
  // catch berisi tangkapan error apabila ditemukan kemudian dicetak.
  .catch((error) => {
    console.log(error);
  })
  // finally berisi perintah yang akan tetap dijalankan apabila semua perintah telah selesai.
  .finally(() => {
    console.log("finish");
  });

// B. try catch
async function checkDay(day) {
  // try berisi perintah yang dapat dijalankan dan memiliki potensial error
  try {
    let result = await cekHariKerja(day); // await digunakan untuk menunggu sampai promise selesai dan mengembalikah hasilnya
    console.log(result);
    // catch berisi tangkapan error apabila ditemukan kemudian dicetak.
  } catch (error) {
    console.log(error);
    // finally berisi perintah yang akan tetap dijalankan apabila semua perintah telah selesai.
  } finally {
    console.log("finish");
  }
}

checkDay("rabu");
