import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_AfxNdhjr96sifUIJvl9fjfXQjRvi1UW2sERhKasE');

export async function convertCurrency(fromCurrency,toCurrency,units){
    const res=await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const ans=res.data[toCurrency];
  
    return ans*units;
}