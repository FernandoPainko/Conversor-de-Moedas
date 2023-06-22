    const moedaIn = document.querySelector("#moeda-in")
    const moedaOut = document.querySelector("#moeda-out")
    const valorInput = document.querySelector("#valor-input")
    const nameIn = document.querySelector("#name-in")
    const nameOut = document.querySelector("#nome-out")
    const valorIn = document.querySelector("#valor-in")
    const valorOut = document.querySelector("#valor-out")
    const band1 = document.querySelector("#band1")
    const band2 = document.querySelector("#band2")

function convert() {
    
    const coinIn = moedaIn.value
    const coinOut = moedaOut.value
    const inputValue= valorInput.value
    const euroToday = 5.27
    const dolarToday = 4.86
    const coinConvert = inputValue / dolarToday


    if (coinIn == 1 && coinOut == 2) {
        valorIn.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valorOut.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(coinConvert)
    } else if (coinIn == 1 && coinOut == 3){
        valorIn.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valorOut.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(coinConvert)
    }
}




