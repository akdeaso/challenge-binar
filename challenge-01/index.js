//soal 1
const changeWord = (selectedText, changedText, text) => {
    return text.replace(selectedText, changedText)
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan cintaku padamu';

console.log(changeWord('mencintai', 'membenci', kalimat1));
console.log(changeWord('bromo', 'semeru', kalimat2));

//soal 2
const checkTypeNumber = (givenNumber) => {
    if (givenNumber === undefined) {
        return 'Error: Bro where is the parameter?'
    } else if (typeof givenNumber !== 'number') {
        return 'Error: Invalid data type'
    } else if (givenNumber % 2 === 0) {
        return 'GENAP'
    } else if (givenNumber % 2 !== 0) {
        return 'GANJIL'
    }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber('3'))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber());

//soal 3
const checkEmail = (email) => {
    let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (email === undefined) {
        return 'Error: Bro where is the parameter?'
    } else if (!regex.test(email)) {
        return "Error: Format not match"
    } else if (typeof email !== 'string') {
        return 'Error: Invalid data type'
    } else if (regex.test(email)) {
        return 'VALID';
    } else {
        return 'INVALID';
    }
}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
console.log(checkTypeNumber(checkEmail(3322)))
console.log(checkEmail())

//soal 4
const isValidPassword = (password) => {
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (password === undefined) {
        return 'Error: Bro where is the parameter?'
    } else if (typeof password !== 'string') {
        return 'Error: Invalid data type'
    } else if (regex.test(password)) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())

//soal 5
const getSplitName = (personName) => {
    if (typeof personName !== "string") {
        return "Error: Invalid data type"
    } else {
        let splitName = personName.split(" ")
        if (splitName.length > 3) {
            return "Error: This function is only for 3 characters name"
        } else if (splitName.length === 1) {
            return {
                firstName: splitName[0],
                middleName: null,
                lastName: null
            }
        } else if (splitName.length === 2) {
            return {
                firstName: splitName[0],
                middleName: null,
                lastName: splitName[1]
            }
        } else if (splitName.length === 3) {
            return {
                firstName: splitName[0],
                middleName: splitName[1],
                lastName: splitName[2]
            }
        }
    }
}

console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))
console.log(getSplitName(0))

//soal 6
const getAngkaTerbesarKedua = (angka) => {
    if (angka === undefined) {
        return 'Error: Bro where is the parameter?'
    } else if (typeof angka !== "object") {
        return 'Error: Invalid data type'
    } else {
        let angkaUnik = [...new Set(angka.sort((a, b) => {
            return a - b
        }).reverse())];
        return angkaUnik[1]
    }
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]
console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())

//soal 7
const dataPenjualanPakAldi = [
    {
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High ',
        kategori: "Sepatu Sneaker",
        hargaSatuan: 360000,
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    }
]

const hitungTotalPenjualan = (dataPenjualan) => {
    if (dataPenjualan === undefined) {
        return 'Error: Bro where is the parameter?'
    } else if (typeof dataPenjualan !== "object") {
        return 'Error: Invalid data type'
    } else {
        let total = 0;
        for (let i = 0; i < dataPenjualan.length; i++) {
            total += dataPenjualan[i].totalTerjual;
        }
        return total;
    }
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi))

//soal 8
const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

const getInfoPenjualan = (dataPenjualan) => {
    if (typeof dataPenjualan !== "object") {
        return 'Error: Invalid data type'
    } else {
        let totalModal = 0
        for (i = 0; i < dataPenjualan.length; i++) {
            totalModal += (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok) * dataPenjualan[i].hargaBeli
        }
        let totalKeuntungan = 0
        for (j = 0; j < dataPenjualan.length; j++) {
            totalKeuntungan += (dataPenjualan[j].hargaJual * dataPenjualan[j].totalTerjual)
        }
        totalKeuntungan -= totalModal
        let terlaris = []
        for (k = 0; k < dataPenjualan.length; k++) {
            terlaris.push([dataPenjualan[k].totalTerjual, dataPenjualan[k].namaProduk, dataPenjualan[k].penulis])
        }
        terlaris.sort((a, b) => {
            return a[0] - b[0]
        }).reverse()
        const rupiah = (number) => {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            }).format(number);
        }
        return {
            totalKeuntungan: rupiah(totalKeuntungan),
            totalModal: rupiah(totalModal),
            presentaseKeuntungan: (totalKeuntungan / totalModal * 100).toFixed() + "%",
            produkBukuTerlaris: terlaris[0][1],
            penulisTerlaris: terlaris[0][2]
        }
    }
}

console.log(getInfoPenjualan(dataPenjualanNovel))
