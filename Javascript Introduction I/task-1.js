// TASK 1
const biodata = {
    name : "Luthfi",
    age : 20,
    hobbies : ["Olahraga", "Membaca", "Menonton Film"],
    isMarried : false,
    schoolList : [
        {
            name:"SDN Cilangkap 01", 
            yearIn:"2008",
            yearOut:"2014",
            major:null
        },
        {
            name:"SMPN 9 Jakarta", 
            yearIn:"2014",
            yearOut:"2017",
            major:null
        },
        {
            name:"SMKN 26 Jakarta", 
            yearIn:"2017",
            yearOut:"2021",
            major:"Sistem Informatika Jaringan dan Aplikasi"
        }
    ],
    skills : [
        {
            skillName:"Html & Css", 
            level:"advanced",
        },
        {
            skillName:"Javascript", 
            level:"beginner",
        }
    ],
    interestInCoding : true
}

console.log(biodata.name);
console.log(biodata.schoolList[2].major);