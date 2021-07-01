const matematika = 100,
      bahasaIndonesia = 32,
      bahasaInggris = 29,
      ipa = 44;

const rataRata = (matematika + bahasaIndonesia + bahasaInggris + ipa)/4;
const grade ='';

// console.log(rataRata);

if (typeof matematika === 'number' && typeof bahasaIndonesia === 'number' && typeof bahasaInggris === 'number' && typeof ipa === 'number') {
  
  if (rataRata < 0 || rataRata > 100 ) {
    console.log("Nilai Salah!");
  } else if (rataRata <= 59) {
    console.log(`Rata-rata = ${rataRata}
  Grade = E`);
  } else if (rataRata >= 60 && rataRata <= 69) {
    console.log(`Rata-rata = ${rataRata}
  Grade = D`);
  } else if (rataRata >= 70 && rataRata <= 79) {
    console.log(`Rata-rata = ${rataRata}
  Grade = C`);
  } else if (rataRata >= 80 && rataRata <= 89) {
    console.log(`Rata-rata = ${rataRata}
  Grade = B`);
  } else {
    console.log(`Rata-rata = ${rataRata}
  Grade = A`);
  } 

} else {
  console.log("Masukkan Nilai Berupa Angka")
}


