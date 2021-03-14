import React, { useContext, useState } from "react";
import { CurrencyContext } from "../contexts/currencyContext.js";
import CurrencyRow from "./currencyRow.jsx";

const Converter = () => {
	// Obtain currency data state from context
	const currencyData = useContext(CurrencyContext);

	// Initialize state variables
	const [leftExchangeRate, setLeftExchangeRate] = useState("left");
	const [rightExchangeRate, setRightExchangeRate] = useState("right");
	const [inputAmount, setInputAmount] = useState("");
	const [inputAmountIsLeft, setInputAmountIsLeft] = useState(); // Checks whether input change is referencing the left or right input field
	
	// Converts input values for one input field and sets that converted value to the other input fields value based on their exchange rates
	let leftInputAmount = "", rightInputAmount = "";

	if (leftInputAmount !== undefined && rightInputAmount !== undefined) {
		if (inputAmountIsLeft) {
			// Convert left input amount
			leftInputAmount = inputAmount;
			rightInputAmount = Math.round(100 * (leftInputAmount / leftExchangeRate) * rightExchangeRate) / 100;
		} else {
			// Convert right input amount
			rightInputAmount = inputAmount;
			leftInputAmount = Math.round(100 * (rightInputAmount / rightExchangeRate) * leftExchangeRate) / 100;
		} // Runs on every re-render
	}

	// Updates exchange rate state based on chosen currency within select dropdown
	function handleSelectChange(e, id) {
		const currencyName = e.target.value;
		// Use id attribute to identify which select dropdown was modified
		id === "left" ? setLeftExchangeRate(currencyData[currencyName]) : setRightExchangeRate(currencyData[currencyName]);
	} 

	// Updates input amounts and a boolean variable that specifies which input field was modified (either left or right)
	function handleLeftInputChange(e) {
		setInputAmount(e.target.value);
		setInputAmountIsLeft(true);
	}

	function handleRightInputChange(e) {
		setInputAmount(e.target.value);
		setInputAmountIsLeft(false);
	}

	return (	
	  <div className="position-center">
      <div className="converter-container">
				<CurrencyRow
					id={"left"}
					inputAmount={leftInputAmount}
        	handleSelectChange={handleSelectChange}
      		handleInputChange={handleLeftInputChange}
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
      	</svg>  
				<CurrencyRow
					id={"right"} 
					inputAmount={rightInputAmount}
      		handleSelectChange={handleSelectChange}
      		handleInputChange={handleRightInputChange}
      	/>
      </div>
    </div> 
	);
}

export default Converter;
