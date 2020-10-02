// Soal 1
function halo() {
	return 'Halo Sanbers!';
}

var tampil = halo();
console.log(tampil);

// Soal 2
function kalikan(num1, num2) {
	return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Soal 3
function introduce(name, age, address, hobby) {
	return (
		'Nama saya ' +
		name +
		', umur saya ' +
		age +
		' tahun, alamat saya di ' +
		address +
		', dan saya punya hobby yaitu ' +
		hobby +
		'!'
	);
}

var name = 'john';
var age = 30;
var address = 'jalan belum jadi';
var hobby = 'gaming';

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// Soal 4
var arrayDaftarPeserta = ['Asep', 'laki-laki', 'baca-buku', 1992];
var pesertaObj = {
	nama: 'Asep',
	'jenis kelamin': 'laki-laki',
	hobi: 'baca buku',
	'tahun lahir': 1992,
};

console.log(arrayDaftarPeserta[3]);
console.log(pesertaObj['tahun lahir']);

// Soal 5
var buah = [
	{
		nama: 'Strawberry',
		warna: 'Merah',
		'ada bijinya': 'tidak',
		harganya: 9000,
	},
	{ nama: 'Jeruk', warna: 'Oranye', 'ada bijinya': 'ada', harganya: 8000 },
	{ nama: 'Pisang', warna: 'Kuning', 'ada bijinya': 'tidak', harganya: 5000 },
];

console.log(buah[0]);

// Soal 6
var dataFilm = [];

function film(nama, durasi, genre, tahun) {
	dataFilm.push({ nama, durasi, genre, tahun });
}
film('Avengers: Endgame', '181 menit', 'Action', 2019);
film('Avengers: Infinity War', '149 menit', 'Action', 2018);
console.log(dataFilm[1]);
