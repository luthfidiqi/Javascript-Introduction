// 10 Method pada Javascript
//______________________________________________

// 1. forEach()
// Metode ini berfungsi untuk melakukan pengulangan di dalam array.
// const array = [1, 2, 3, 4, 5]
// array.forEach(item => { 
//   console.log(item);  // Output: 1 2 3 4 5
// });

//______________________________________________

// 2. filter()
// Metode ini berfungsi untuk membuat sebuah array baru dengan memperhatikan kondisi tertentu pada setiap elemen dari array yang sudah ada.
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // membuat array baru dari array angka yang isinya adalah bilangan habis dibagi 2
// const filteredArray = angka.filter(item => item % 2 === 0);
// console.log(filteredArray) // Output: [2, 4, 6, 8]

//______________________________________________

// 3. includes()
// Metode ini berfungsi untuk mengecek apakah pada elemen array memenuhi suatu kondisi atau tidak.
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const something = angka.includes(2);
// const any = angka.includes(10);
// console.log(something); // Output: true
// console.log(any); // Output: false

//______________________________________________

// 4. map()
// Metode ini berfungsi untuk membuat array baru sambil mengecek/melakukan operasi terhadap setiap elemen array.
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // membuat array baru dari array angka untuk memeriksa apakah setiap elemennya bernilai habis dibagi 2 atau tidak
// const mapedArray = angka.map(item => item % 2 === 0);
// console.log(mapedArray); // output: [false, true, false, true, false, true, false, true, false]
// // membuat array baru dari array angka untuk melakukan operasi perkalian 2 pada setiap elemennya
// const multipleOfTwo = angka.map(e => e * 2);
// console.log(multipleOfTwo); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18]

//______________________________________________

// 5. some()
// Metode ini berfungsi untuk mengecek sekurang kurangnya salah satu elemen array memenuhi kondisi.
// const angka = [1, 2, 3, 4, 5]
// // mengecek apakah dalam array angka terdapat elemen yang habis dibagi 2
// const some = angka.some(item => item % 2);
// console.log(some); // Output: true
// // mengecek apakah dalam array angka terdapat elemen yang kurang dari 0
// const thing = angka.some(item => item < 0);
// console.log(thing); // Output: false

//______________________________________________

// 6. every()
// Metode ini berfungsi untuk mengecek apakah setiap elemen dalam array memenuhi kondisi.
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // mengecek apakah semua elemen lebih dari 5
// const greaterFive = angka.every(item => item > 4);
// console.log(greaterFive); // Output: false
// // mengecek apakah semua element kurang dari 10
// const lessTen = angka.every(item => item < 10);
// console.log(lessTen); // Output: true

//______________________________________________

// 7. reduce()
// Metode ini berfungsi untuk mereduce elemen array menjadi single value dengan menjumlah setiap elemen (dari kiri ke kanan).
// const angka = [1, 2, 3, 4, 5];
// const sum = angka.reduce((total, value) => total + value, 0); // kita dpt mengganti 0 dengan angka lain untuk mendapatkan hasil penjumlahan yang berbeda
// console.log(sum); // Output: 15

//______________________________________________

// 8. sort()
// Metode ini berfungsi untuk mengurutkan elemen pada array baik secara ascending atau descending.
// const angka = [20, 10, 3, 30, 58, 42, 6, 9]
// const huruf = ['z', 'a', 'c', 'g', 'p']

// // ascending order
// const descOrder = angka.sort((a, b) => a > b ? 1 : -1);
// console.log(descOrder); // Output: [3, 6, 9, 10, 20, 30, 42, 58]

// // descending order
// const ascOrder = huruf.sort((a, b) => a > b ? -1 : 1);
// console.log(ascOrder); // Output: ['z', 'p', 'g', 'c', 'a']

//______________________________________________

// 9. concat()
// Metode ini berfungsi untuk menggabungkan 2 array menjadi 1 array.

// const fruits = ['apel', 'banana', 'mango']
// const number = [1, 2, 3]

// const newArray = fruits.concat(number);
// console.log(newArray); // Output: ["apel", "banana", "mango", 1, 2, 3]

//______________________________________________

// 10. Array.of()
// Metode ini berfungsi untuk membuat array dari setiap argumen yang dipassing

// const angka = Array.of(1, 2, 3, 4, 5, 6);
// console.log(angka); // Output: [1, 2, 3, 4, 5, 6]