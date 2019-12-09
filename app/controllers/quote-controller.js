import QuoteService from "../services/quote-service.js";

function _drawQuote (quote, auth) {
	let quoteElem = document.getElementById('quote');
	quoteElem.innerHTML = `
	<p id="quote-body">
		<span>${quote}</span><br>
		${auth}
	</p>
	`
}

export default class QuoteController {
	constructor () {
		this.getQuoteAsync();
	}
	async getQuoteAsync () {
		let res = await QuoteService.getQuote();
		_drawQuote(res.data.quote.body, res.data.quote.author);
	}
}
