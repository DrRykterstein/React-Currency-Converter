import React, { useEffect, useState } from "react";
import fetchCurrencyData from "./modules/Api.js";
import { CurrencyContext } from "./contexts/currencyContext.js";
import Converter from "./components/converter.jsx";

function App() {
	// Initialize currency data to store currency names
	const [currencyData, setCurrencyData] = useState([]);

	// Fetch currency data on mount
	useEffect(() => {
		const getcurrencyData = async () => {
			const currencyData = await fetchCurrencyData();
			setCurrencyData(currencyData);	// Store currency data within our state
		}
 		getcurrencyData();
	}, []);

  return (
   	<div className="App">
      <h1 className="main-title">Currency Converter</h1>
	    <CurrencyContext.Provider value={currencyData}>
      	<Converter currencyData={currencyData} />
      </CurrencyContext.Provider>
    </div>
  );
} 

export default App;
