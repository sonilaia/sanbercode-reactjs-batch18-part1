// Soal 1

const luasLingkaran = (r) => {
	return Math.PI * r * r;
};

console.log(luasLingkaran(3));

const kelilingLingkaran = (r) => {
	return 2 * Math.PI * r;
};

console.log(kelilingLingkaran(3));

// Soal 2

let kalimat = '';

const kalimat1 = 'saya';
const kalimat2 = 'adalah';
const kalimat3 = 'seorang';
const kalimat4 = 'frontend';
const kalimat5 = 'developer';

const kalimatAkhir = `${kalimat1} ${kalimat2} ${kalimat3} ${kalimat4} ${kalimat5}`;
kalimat += kalimatAkhir;
console.log(kalimat);

// Soal 3

const newFunction = function literal(firstName, lastName) {
	return {
		firstName,
		lastName,
		fullName: function () {
			console.log(firstName + ' ' + lastName);
		},
	};
};

//Driver Code
newFunction('William', 'Imoh').fullName();

// Soal 4

let newObject = [
	'Harry',
	'Potter Holt',
	'Hogwarts React Conf',
	'Deve-wizard Avocado',
	'Vimulus Renderus!!!',
];

const [firstName, lastName, destination, occupation, spell] = newObject;

console.log(firstName, lastName, destination, occupation);

// Soal 5
const west = ['Will', 'Chris', 'Sam', 'Holly'];
const east = ['Gill', 'Brian', 'Noel', 'Maggie'];
let combined = [...west, ...east];
//Driver Code
console.log(combined);
