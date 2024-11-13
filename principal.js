const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const inputValue = document.getElementById("inputValue");
const convertButton = document.getElementById("conversor__button");
const resultElement = document.getElementById("result");

const exchangeRates = {
    "USD-BRL": 5.75,
    "BRL-USD": 1 / 5.75
};

function convertCurrency() {
    const amount = parseFloat(inputValue.value);
    
}

convertButton.addEventListener("click", convertCurrency);