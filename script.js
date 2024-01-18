function calculate() {
  // Mendapatkan nilai panjang sisi dari input
  var sideLength = parseFloat(document.getElementById("sideLength").value);

  // Memastikan nilai yang dimasukkan adalah angka positif
  if (isNaN(sideLength) || sideLength <= 0) {
    alert("Masukkan panjang sisi yang valid.");
    return;
  }

  // Menghitung luas dan keliling persegi
  var area = sideLength * sideLength;
  var perimeter = 4 * sideLength;

  // Menampilkan hasil pada elemen HTML
  document.getElementById("result").innerText =
    "Hasil: Luas = " + area.toFixed(2) + ", Keliling = " + perimeter.toFixed(2);
}
