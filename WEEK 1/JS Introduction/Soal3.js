let triangle = '';
let printSegitiga = 2;
if (typeof printSegitiga !== 'number' || printSegitiga <= 1) {
  console.log("Data harus angka diatas 1");
} else {
  for (let i = printSegitiga; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      triangle += `${j}  `;
    }
    triangle += '\n';
  }
}
console.log(triangle);
