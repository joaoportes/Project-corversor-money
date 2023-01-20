const button = document.getElementById('button-convert')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const Bitcoin = 0.0000062



const covertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const dolarValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dólar Americano") {
        dolarValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === "£ Euro") {
        dolarValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if (select.value === "Bitcoin") {
        dolarValueText.innerHTML = inputReais * Bitcoin
    }



}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyimg = document.getElementById('currrency-img')

    if (select.value == 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyimg.src = "./imagens/EUA.png"
    }

    if (select.value == '£ Euro') {
        currencyName.innerHTML = "Euro"
        currencyimg.src = "./imagens/euro.png"
    }

    if (select.value == "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyimg.src = "./imagens/BItcoin.png"
    }

    covertValues()

}

button.addEventListener('click', covertValues)
select.addEventListener('change', changeCurrency)




