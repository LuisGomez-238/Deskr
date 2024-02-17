// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const WorkDeal = () => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState();
    const [termLength, setTermLength] = useState();
    const [tradeInValue, setTradeInValue] = useState();
    const [salesPrice, setSalesPrice] = useState();
    const [tradeInBal, setTradeInBal] = useState();
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    useEffect(() => {
        calculateLoanAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [salesPrice, tradeInValue, tradeInBal]);

    const handleLoanAmountChange = (event) => {
        setLoanAmount(parseFloat(event.target.value));
    };

    const handleInterestRateChange = (event) => {
        setInterestRate(parseFloat(event.target.value));
    };

    const handleTermLengthChange = (event) => {
        setTermLength(parseInt(event.target.value));
    };

    const handleSalesPrice = (event) => {
        setSalesPrice(parseFloat(event.target.value));
    }

    const handleTradeInValue = (event) => {
        setTradeInValue(parseFloat(event.target.value));
    }

    const handleTradeInBal = (event) => {
        setTradeInBal(parseFloat(event.target.value));
    }

    const calculateLoanAmount = () => {
        const loanAmount = salesPrice + tradeInValue - tradeInBal;
        setLoanAmount(loanAmount);
    };


    const calculateMonthlyPayment = () => {
        if (loanAmount > 0 && interestRate > 0 && termLength > 0) {
            const monthlyInterestRate = interestRate / (100 * 12);
            setMonthlyPayment (loanAmount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), termLength) / (Math.pow((1 + monthlyInterestRate), termLength) - 1));
            // alert(`Your monthly payment is ${monthlyPayment.toFixed(2)}`);
        } else {
            alert("Please fill in all fields");
        }
    };


    return (
        <div className="DeskTool">
            <h2>Working Deal</h2>
            <label>Sales Price</label>
            <input type="number" value={salesPrice} onChange={handleSalesPrice} placeholder='Sales Price' />
            <label>Trade Value</label>
            <input type='number' value={tradeInBal} onChange={handleTradeInBal} placeholder='Trade-in Balance' />
            <label>Trade Balance</label>
            <input type="number" value={tradeInValue} onChange={handleTradeInValue} placeholder='Trade-in Value' />
            <label>Financed Amount</label>
            <input type="number" value={loanAmount} onChange={handleLoanAmountChange} placeholder="Loan Amount" />
            <label>APR</label>
            <input type="number" value={interestRate} onChange={handleInterestRateChange} placeholder="Interest Rate" />
            <label>Term</label>
            <input type="number" value={termLength} onChange={handleTermLengthChange} placeholder="Term Length" />
            <label>Monthly Investment</label>
            <input type="number" value={monthlyPayment !== undefined ? monthlyPayment.toFixed(2) : ''} placeholder='Monthly Investment' readOnly />
            <br />
            <button onClick={calculateMonthlyPayment}>Calculate Monthly Payment</button>
        </div>
    );
};

export default WorkDeal;