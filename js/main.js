//DOCS API : https://docs.awesomeapi.com.br/api-de-moedas

$(document).ready(function(){
    ajaxCurrencyExchange()
})

const ajaxCurrencyExchange = () => {
    $.ajax({
        url: `https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL`,
        dataType: 'json',
        method: 'GET',
        success: function(data){
            $('#dolar-today').val(formatterCoins(data.USDBRL.ask))
            $('#euro-today').val(formatterCoins(data.EURBRL.ask))
            $('#libra-today').val(formatterCoins(data.GBPBRL.ask))
            $('#bitcoin-today').val(formatterCoins(data.BTCBRL.ask))
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR, textStatus, errorThrown)
        }
    })
}

const formatterCoins = (coin) => {
    let formattedCurrency = parseFloat(coin).toFixed(2)
    return changesCurrencySymbol(formattedCurrency)
}

const changesCurrencySymbol = (coin) => {
    return coin.replace('.', ',')
}