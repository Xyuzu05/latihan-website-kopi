// Memberi tahu mahasiswa bahwa script berhasil di-load
alert('Selamat datang di Website Profil UMKM Anda!');
// Menampilkan informasi variabel di console
const namaUMKM = 'Kopi Nusantara';
console.log('Nama UMKM:', namaUMKM);
// Demonstrasi variabel dan operator
let produk = 3;
console.log('Jumlah produk saat ini:', produk);
produk += 2;
console.log('Setelah penambahan:', produk);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("formKontak");
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const pesan = document.getElementById("pesan");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", function(e) { 
        e.preventDefault();
        if (nama.value === "" || email.value === "" || pesan.value === "") {
            errorMsg.textContent = "Semua bidang harus diisi!";
        } else {
            errorMsg.textContent = "";
            alert("Pesan berhasil dikirim!");
            form.reset();
        }
    });
});
