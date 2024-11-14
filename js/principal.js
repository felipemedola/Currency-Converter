const amountInput = document.getElementById('amountInput');
const currencyFrom = document.getElementById('currencyFrom');
const currencyTo = document.getElementById('currencyTo');
const convertButton = document.getElementById('convertButton');
const conversionResult = document.getElementById('conversionResult');

const exchangeRates = {
    'BRL-USD': 1 / 5.75,
    'USD-BRL': 5.75
}

function convertCurrency() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        conversionResult.textContent = 'Por favor, insira um valor válido.';
        return;
    }

    const from = currencyFrom.value;
    const to = currencyTo.value;

    const exchangeKey = `${from}-${to}`;

    if (exchangeRates[exchangeKey]) {
        const convertedAmount = amount * exchangeRates[exchangeKey];
        conversionResult.textContent = `${to === 'USD' ? '$' : 'R$'} ${convertedAmount.toFixed(2)}`;
    } else {
        conversionResult.textContent = 'Selecione moedas diferentes para converter.';
    }
}

convertButton.addEventListener('click', convertCurrency);
