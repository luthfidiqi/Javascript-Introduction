// Data Nama
const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
];

// Pembuatan Function
const searchName = (search, limit, callback) => {
    const result = []
    let l = 0
    const n = name.length
    // Mensetarakan nilai data dan searching nama
    for(let i = 0 ; i < n ; i++){
        x = name[i].toString().toLowerCase()
        // Proses Searcing
        let check = x.includes(search)
            if(check === true){
                result[l] = name[i] 
                l++
                if(l === limit){
                break;
                }
            } 
        }
    callback(result);
};

// Cetak Hasil
const resultName = (result) => {
    console.log(result);
};

searchName('an', 3 , resultName);