// Contoh penggunaan if, else, dan nested if
let nilai = 75;

if (nilai >= 80) {
  console.log("Selamat! Anda lulus dengan nilai tinggi.");
} else {
  console.log("Maaf, Anda belum lulus. Silakan coba lagi di kesempatan berikutnya.");
}

// Contoh penggunaan switch case
let hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari sekolah.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur.");
    break;
  default:
    console.log("Hari ini adalah hari biasa.");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 4; i++) {
    console.log("Perulangan ke-" + i);
  }
  
  // Contoh penggunaan while loop
  let angka = 1;
  while (angka <= 4) {
    console.log("Angka ke-" + angka);
    angka++;
  }
  
// Contoh penggunaan do while loop
  let counter = 0;
  do {
    console.log("Counter: " + counter);
    counter++;
  } while (counter < 3);
  
// Contoh penggunaan function
  function tambah(a, b) {
    return a + b;
  }
  
  let hasil = tambah(3, 6);
  console.log("Hasil penjumlahan: " + hasil);

// Mendefinisikan fungsi
function sapaan(nama) {
    console.log("Assalamulaikum, " + nama + "! Selamat Bergabung.");
  }
  
  // Memanggil fungsi dengan argumen
  sapaan("Arief");
  sapaan("Rif");
  