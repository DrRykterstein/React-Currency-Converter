import axios from "axios";

// Fetch data from exchange rates API
const fetchCurrencyData = async () => {
	const { data } = await axios.get("https://api.exchangeratesapi.io/latest");
	return data.rates;
}

export default fetchCurrencyData;