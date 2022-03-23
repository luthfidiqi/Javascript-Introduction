// TASK 2
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

// Menghitung & Mencetak Rata-Rata
let averange=(mtk+bahasaIndonesia+bahasaInggris+ipa)/4;
console.log("Rata-Rata = " + averange);

// Menentukan Grade Nilai Rata-Rata
if (averange>=90 && averange<=100){
    console.log("Grade = A");
} else if(averange>=80 && averange<90){
    console.log("Grade = B");
} else if(averange>=70 && averange<80){
    console.log("Grade = C");
} else if (averange>=60 && averange<70){
    console.log("Grade = D");
} else if(averange >=0 && averange<60){
    console.log("Grade = E");
} else {
    console.log("Grade = Pastikan nilai yang dimasukan sudah benar.");
}