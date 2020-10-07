var readBooksPromise = require('./promise.js');

var books = [
	{ name: 'LOTR', timeSpent: 3000 },
	{ name: 'Fidas', timeSpent: 2000 },
	{ name: 'Kalkulus', timeSpent: 4000 },
];

// Lanjutkan code untuk menjalankan function readBooksPromise

readBooksPromise(10000, books[0]).then(function (item1) {
	readBooksPromise(item1, books[1]).then(function (item2) {
		readBooksPromise(item2, books[2]).then(function (item3) {
			console.log(item3);
		});
	});
});
