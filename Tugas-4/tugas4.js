// Soal 1
var i = 1;

var j = 20;

console.log('LOOPING PERTAMA');
while (i <= 20) {
	if (i % 2 == 0) {
		console.log(i + ' - I love coding');
	}
	i++;
}
console.log('LOOPING KEDUA');
while (j > 0) {
	if (j % 2 == 0) {
		console.log(j + ' - I will become a frontend developer');
	}
	j--;
}

// Soal 2
for (i = 1; i <= 20; i++) {
	if (i % 3 == 0 && i % 2 === 1) {
		console.log(i + ' - I Love Coding');
	} else if (i % 2 == 0) {
		console.log(i + ' - Berkualitas');
	} else console.log(i + ' - Santai');
}

// Soal 3
var s = '';
for (var i = 0; i < 7; i++) {
	for (var j = 0; j <= i; j++) {
		s += '#';
	}
	s += '\n';
}

console.log(s);

// Soal 4
var kalimat = 'saya sangat senang belajar javascript';
var newKalimat = kalimat.split(' ');

console.log(newKalimat);

// Soal 5
var daftarBuah = [
	'2. Apel',
	'5. Jeruk',
	'3. Anggur',
	'4. Semangka',
	'1. Mangga',
];
daftarBuah.sort();

for (var i = 0; i < daftarBuah.length; i++) {
	console.log(daftarBuah[i]);
}
