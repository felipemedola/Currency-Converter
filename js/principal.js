const inputValue = document.getElementById('inputValue');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const conversorButton = document.getElementById('conversorButton');
const resultConverted =  document.getElementById('result');

const exchangeRates = {
    'BRL-USD': 1 / 5.75,
    'USD-BRL': 5.75
}

function convertCurrency() {
    const amount = parseFloat(inputValue.value);

    if (isNaN(amount) || amount <= 0) {
        resultConverted.textContent = 'Por favor, insira um valor válido.';
        return;
    }

    const from = fromCurrency.value;
    const to = toCurrency.value;

    const exchangeKey = `${from}-${to}`;

    if (exchangeRates[exchangeKey]) {
        const convertedAmount = amount * exchangeRates[exchangeKey];
        resultConverted.textContent = convertedAmount.toFixed(2) +  to;
    } else {
        resultConverted.textContent = 'Selecione moedas diferentes para converter.'
    }
}

conversorButton.addEventListener('click', convertCurrency);