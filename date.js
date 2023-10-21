var sekarang = new Date();

var tahun = sekarang.getFullYear();
var bulan = sekarang.getMonth(); // Ingat bahwa bulan dimulai dari 0 (0 = Januari, 11 = Desember).
var hari = sekarang.getDate();
var jam = sekarang.getHours();
var menit = sekarang.getMinutes();
var detik = sekarang.getSeconds();

console.log("Tanggal: " + hari + "-" + (bulan+1) +"-" + tahun);


console.log("Jam: " + jam +":"+ menit + ":" + detik);

