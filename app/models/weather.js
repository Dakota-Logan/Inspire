export default class Weather {
	constructor(data) {
		console.log(data, 'from model');
		this.city = data.name;
		this.C = Math.floor(data.main.temp-273.15);
		this.F = (this.C*9/5)+32;
	}
}