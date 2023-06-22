

const selectIN = document.querySelector('#select1')
const selectOUT = document.querySelector('#select2')
const inputValue = document.querySelector('#valor-input')

const valorIN = document.querySelector('#valor-in')
const valorOut = document.querySelector('#valor-out')

const nameIN = document.querySelector('#name-in')
const nameOut = document.querySelector('#name-out')

const flag1 = document.querySelector('#band1')
const flag2 = document.querySelector('#band2')

const buttonConvert = document.querySelector('#button')

selectIN.addEventListener('change',select1)
selectOUT.addEventListener('change',select2)
buttonConvert.addEventListener('click' ,convert)

function convert() {
        const selectCoin1 = selectIN.value
        const selectCoin2 = selectOUT.value
        const money = inputValue.value
        const dolarToday = 4.80
        const euroToday = 5.26

        if ( selectCoin1 == 1 && selectCoin2 == 2){
                valorIN.innerHTML = new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency: 'BRL',
                }).format(money)

                valorOut.innerHTML = new Intl.NumberFormat('en-US', {
                        style:'currency',
                        currency: 'USD',
                }).format(money/dolarToday)

        } if (selectCoin1 == 1 && selectCoin2 == 3){
                valorIN.innerHTML = new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency: 'BRL',
                }).format(money)

                valorOut.innerHTML = new Intl.NumberFormat('en-UK', {
                        style:'currency',
                        currency: 'EUR',
                }).format(money/euroToday)

        } if (selectCoin1 == 2 && selectCoin2 == 1){
                valorIN.innerHTML = new Intl.NumberFormat('en-US', {
                        style:'currency',
                        currency: 'USD',
                }).format(money)

                valorOut.innerHTML = new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency: 'BRL',
                }).format(money*dolarToday)
        
        }if (selectCoin1 == 2 && selectCoin2 == 3){
                valorIN.innerHTML = new Intl.NumberFormat('en-US', {
                        style:'currency',
                        currency: 'USD',
                }).format(money)

                valorOut.innerHTML = new Intl.NumberFormat('en-UK', {
                        style:'currency',
                        currency: 'EUR',
                }).format(money*0.91)
        }if (selectCoin1 == 3 && selectCoin2 == 1){
                valorIN.innerHTML = new Intl.NumberFormat('en-UK', {
                        style:'currency',
                        currency: 'EUR',
                }).format(money)

                valorOut.innerHTML = new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency: 'BRL',
                }).format(money*euroToday)
        }   
        if (selectCoin1 == 3 && selectCoin2 == 2){
                valorIN.innerHTML = new Intl.NumberFormat('en-UK', {
                        style:'currency',
                        currency: 'EUR',
                }).format(money)

                valorOut.innerHTML = new Intl.NumberFormat('en-US', {
                        style:'currency',
                        currency: 'USD',
                }).format(money*1.19)
        
        }
}
function select1() {
        const coin1 = selectIN.value

        if (coin1 == 1) {
                console.log("eu")
                flag1.src = './assets/brasil.png'
                nameIN.innerHTML = "Real Brasileiro"

        } if (coin1 == 2) {
                flag1.src = './assets/usa.png'
                nameIN.innerHTML = "Dólar Americano"

        } if (coin1 == 3) {
                flag1.src = './assets/euro.png'
                nameIN.innerHTML = "EURO"
        } convert()
}
function select2() {
        const coin2 = selectOUT.value

        if (coin2 == 1) {
                console.log("eu")
                flag2.src = './assets/brasil.png'
                nameOut.innerHTML = "Real Brasileiro"

        } if (coin2 == 2) {
                flag2.src = './assets/usa.png'
                nameOut.innerHTML = "Dólar Americano"

        } if (coin2 == 3) {
                flag2.src = './assets/euro.png'
                nameOut.innerHTML = "EURO"

        }
        convert()
}
