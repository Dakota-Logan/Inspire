// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

class QuoteService {
  
  getQuote() {
    return _quoteApi.get();
  }
}

const quoteService = new QuoteService();
export default quoteService;
