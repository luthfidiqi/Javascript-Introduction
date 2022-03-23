// TASK 4
let data = {
    id : 1,
    name  : "Leanne Graham", 
    username : "Bret",
    email : "Sincere@april.biz",
    address : {
        street : "Kulaz Light",
        suite : "Apt. 556",
        city : "Gwenborough",
        zipcode : "92998-3874",
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org",
};

// Spread Operator
data = { ...data, name : "Luthfi", email : "luthfidiqi@gmail.com", hobby : "Olahraga, Membaca, Menonton Film"}

// Destructuring
let {street, city} = data.address;

console.log(data);