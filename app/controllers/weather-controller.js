import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather(data) {
	console.log(data);
	let elem = document.getElementById('weather');
	elem.innerHTML = `
	<h1>${data.C}°C</h1>
	<h3>in ${data.city}</h3>
	`
}
export default class WeatherController {
	constructor() {this.draw()}
	async draw () {
		let res = await WeatherService.getWeather();
		_drawWeather(res);
	}
}
