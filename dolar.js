 
//         async function buscarCotacaoDolar() {
//             try {
//               const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');
//               if (!response.ok) {
//                 throw new Error('Não foi possível obter a cotação do dólar.');
//               }
          
//               const data = await response.json();
          
//               const cotacoes = {
//                 dolar: parseFloat(data.USDBRL.bid),
//                 euro: parseFloat(data.EURBRL.bid),
//                 bitcoin: parseFloat(data.BTCBRL.bid)
//               };
          
//               return cotacoes;
//             } catch (error) {
//               console.error(error);
//               return null;
              
//             } 
          

//           }     
    

// async function converterRealParaDolar(valorReal) {
//     const cotacoes = await buscarCotacaoDolar();
  
//     if (cotacoes) {
//       const valorDolar = valorReal / cotacoes.dolar;
//       return valorDolar.toFixed(2);
//     } else {
//       return null;
//     }
//   }
  
//   const valorReal = 1000
//   converterRealParaDolar(valorReal)
//     .then((valorDolar) => {
//       console.log(`O valor em dólar é: $${valorDolar}`);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

// converterRealParaDolar()



const axios = require('axios');

async function getExchangeRate(baseCurrency, targetCurrency) {
  try {
    const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}&symbols=${targetCurrency}`);
    const data = response.data;
    const exchangeRate = data.rates[targetCurrency];
    return exchangeRate;
  } catch (error) {
    console.log('Ocorreu um erro ao buscar a taxa de câmbio:', error.message);
    return null;
  }
}

// Buscando a taxa de câmbio do dólar para o euro
const baseCurrency = 'USD';
const targetCurrency = 'EUR';

getExchangeRate(baseCurrency, targetCurrency)
  .then((exchangeRate) => {
    if (exchangeRate !== null) {
      console.log(`A taxa de câmbio de 1 dólar para euro é: ${exchangeRate}`);
    }
  });