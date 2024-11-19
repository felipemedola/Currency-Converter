export async function fetchExchangeRate(from, to) {
    try {
        const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${from}-${to}`);
        const data = await response.json();
        const key = `${from}${to}`
        
        if (data[key] && data[key].bid) {
            return parseFloat(data[key].bid);
        } else {
            console.error('Cotação não encontrada.');
            return null;
        }

    } catch (error) {
        console.error('Erro ao buscar cotação:', error);
        return null;
    }
}