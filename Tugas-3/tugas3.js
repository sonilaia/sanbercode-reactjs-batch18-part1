// soal 1
var kataPertama = 'saya';
var kataKedua = 'senang';
var kataKetiga = 'belajar';
var kataKeempat = 'javascript';
var kataKeempatUpper = kataKeempat.toUpperCase();

var hasil =
	kataPertama + ' ' + kataKedua + ' ' + kataKetiga + ' ' + kataKeempatUpper;

console.log(hasil);

// soal 2
var kataPertama = '1';
var kataKedua = '2';
var kataKetiga = '4';
var kataKeempat = '5';

var intKataPertama = parseInt(kataPertama);
var intKataKedua = parseInt(kataKedua);
var intKataKetiga = parseInt(kataKetiga);
var intKataKeempat = parseInt(kataKeempat);

var hasil = intKataPertama + intKataKedua + intKataKetiga + intKataKeempat;

console.log(hasil);

// soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata kelima: ' + kataKelima);

// soal 4
var nilai = 75;

if (nilai >= 80) {
	console.log(nilai + ' indeksnya A');
} else if (nilai >= 70 && nilai < 80) {
	console.log(nilai + ' indeksnya B');
} else if (nilai >= 60 && nilai < 70) {
	console.log(nilai + ' indeksnya C');
} else if (nilai >= 50 && nilai < 60) {
	console.log(nilai + ' indeksnya D');
} else {
	console.log(nilai + ' indeksnya E');
}

// soal 5
var tanggal = 14;
var bulan = 9;
var tahun = 1997;

switch (bulan) {
	case 1:
		bulan = 'Januari';
		break;
	case 2:
		bulan = 'Februari';
		break;
	case 3:
		bulan = 'Maret';
		break;
	case 4:
		bulan = 'April';
		break;
	case 5:
		bulan = 'Mei';
		break;
	case 6:
		bulan = 'Juni';
		break;
	case 7:
		bulan = 'July';
		break;
	case 8:
		bulan = 'Agustus';
		break;
	case 9:
		bulan = 'September';
		break;
	case 10:
		bulan = 'Oktober';
		break;
	case 11:
		bulan = 'November';
		break;
	case 12:
		bulan = 'Desember';
		break;
}

var output = tanggal + ' ' + bulan + ' ' + tahun;

console.log(output);
