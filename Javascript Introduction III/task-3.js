// Ketersediaan Buah
// const checkFruits = (fruit) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const listFruits = ["orange", "apple", "avocado", "banana", "lemon"];
//       let checking = listFruits.find((value) => {
//         return value === fruit;
//       });
//       if (checking) {
//         resolve(checking);
//       } else {
//         reject(new Error(`buah ${fruit} tidak tersedia`));
//       }
//     }, 3000);
//   });
// };

// checkFruits("orange")
//   .then((fruit) => {
//     console.log(`buah ${fruit} tersedia`);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finish");
//   });

// Membalik Huruf
// const reverseLetter = (words) => new Promise((resolve, reject) => {
//     let reverse = ""
//     let i = words.length-1
//     while(i >= 0){
//         reverse = reverse + words[i]
//         i = i - 1
//     }
//     if(reverse) {
//         resolve(reverse)
//     } else {
//         reject(new Error("error"))
//     }
// })

// reverseLetter('Hello World')
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("finish");
//     })

// Menentukan Grade
const grade = (gradeValue) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let value = gradeValue;
      if (value >= 90 && value <= 100) {
        resolve("Grade = A");
      } else if (value >= 80 && value < 90) {
        resolve("Grade = B");
      } else if (value >= 70 && value < 80) {
        resolve("Grade = C");
      } else {
        reject(new Error("Pastikan nilai yang dimasukan sudah benar."));
      }
    }, 3000);
  });
};

grade(95)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finish");
  });
