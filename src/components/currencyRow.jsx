import React, { useContext } from "react";
import { CurrencyContext } from "../contexts/currencyContext.js";

const CurrencyRow = ({ id, inputAmount, handleSelectChange, handleInputChange }) => {
	// Initialize currency context
	const currencyData = useContext(CurrencyContext);

	return (
	  <div className="select-container">
			<select 
				className="select" 
				onChange={(e) => handleSelectChange(e, id)}>
      	<option>Select a currency</option>
      	{/*Populate select dropdown with currency names*/}
	      {Object.keys(currencyData).map((name, idx) => {
	     		return <option key={idx}>{name}</option>
	      })}
      </select>
			<input
				className="input" 
				type="number"
				value={inputAmount}
				onChange={(e) => handleInputChange(e)}>
			</input>
    </div>
	); 
}

export default CurrencyRow;