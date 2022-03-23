// TASK 3
const printSegitiga = 7;

if (typeof printSegitiga === "number") {
    for (let i = 0; i <= printSegitiga; i++) {
        let output = ""
        for (let a = 1; a <= printSegitiga - i; a++) {
            output = output + " " + a
        }
        console.log(output);
    }
}