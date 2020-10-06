// Soal 1

// Release 0

class Animal {
	constructor(name) {
		this.name = name;
		this.legs = 4;
		this.cold_blooded = false;
	}
	get name() {
		return this._name;
	}
	set name(x) {
		this._name = x;
	}
}

var sheep = new Animal('shaun');

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

// Release 1

class Frog extends Animal {
	constructor(name) {
		super(name);
		this.legs = 2;
	}
	jump() {
		return 'hop hop';
	}
}

class Ape extends Animal {
	constructor(name) {
		super(name);
		this.legs = 2;
	}
	yell() {
		return 'Auooo';
	}
}

var sungokong = new Ape('kera sakti');
sungokong.yell(); // "Auooo"

console.log(sungokong);

var kodok = new Frog('buduk');
kodok.jump(); // "hop hop"
console.log(kodok);

// Soal 2

class Clock {
	constructor({ template }) {
		this.template = template;
		this.timer;
	}
	render() {
		var date = new Date();

		var hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		var mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		var secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		var output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);

		console.log(output);
	}

	stop() {
		clearInterval(this.timer);
	}

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), 1000);
	}
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();
