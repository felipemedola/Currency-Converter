import { fetchExchangeRate } from './api.js';

const amountInput = document.getElementById('amountInput');
const currencyFrom = document.getElementById('currencyFrom');
const currencyTo = document.getElementById('currencyTo');
const convertButton = document.getElementById('convertButton');
const conversionResult = document.getElementById('conversionResult');
const conversionImg = document.getElementById('conversionImg');

const currencyFlags = {
    BRL: "img/logo-real.png",
    USD: "img/logo-dolar.png",
    EUR: "img/logo-euro.png"
};

function updateCurrencyImage() {
    const selectedCurrency = currencyTo.value;
    const newImgSrc = currencyFlags[selectedCurrency]; 
    conversionImg.src = newImgSrc;
}

async function convertCurrency() {
    const amount = parseFloat(amountInput.value)


    if (isNaN(amount) || amount <= 0) {
        conversionResult.textContent = 'Por favor, insira um valor válido.';
        return;
    }

    const from = currencyFrom.value;
    const to = currencyTo.value;

    if (from === to) {
        conversionResult.textContent = 'Selecione moedas diferentes para converter.';
        return;
    }

    const exchangeRate = await fetchExchangeRate(from, to);

    if (exchangeRate) {
        const convertedAmount = amount * exchangeRate;

        if (to === 'USD') {
            conversionResult.textContent = 'US$ ' + `${convertedAmount.toFixed(2)}`
        } else if (to === 'BRL') {
            conversionResult.textContent = 'R$ ' + `${convertedAmount.toFixed(2)}`
        } else if (to === 'EUR') {
            conversionResult.textContent = '€ ' + `${convertedAmount.toFixed(2)}`
        } else if (to === 'BTC') {
            conversionResult.textContent = '₿ ' + `${convertedAmount.toFixed(2)}`
        }
    } else {
        conversionResult.textContent = 'Erro ao obter a cotação. Tente novamente mais tarde.';
    }
}

currencyTo.addEventListener('change', updateCurrencyImage);
convertButton.addEventListener('click', convertCurrency);