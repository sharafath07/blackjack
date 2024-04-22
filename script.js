

let cards = []
let sum = 0
let isAlive = true
let message = ""
let result = {
    wins: 0,
    losses: 0,
}
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let resultEl = document.getElementById("result-el")


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    sum = 0
    isAlive = true
    cards = [getRandomCard(), getRandomCard()]
    
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        sum += cards[i]
    }
    sumEl.textContent = 'Sum: ' + sum;
    playResult()
}

function newCard() {
    if (isAlive === true){
        cards.push(getRandomCard())
        sum += cards[cards.length - 1]
        cardsEl.textContent += cards[cards.length - 1] + " "
        sumEl.textContent = 'Sum: ' + sum;
    }
    
    playResult()
}

function playResult() {
   
    if (sum < 21) {
        messageEl.textContent = 'Draw a new card...'
        isAlive = true
        resultEl.innerHTML = `wins: ${result.wins}<br>losses: ${result.losses}`
    } else if (sum === 21) {
        messageEl.textContent = 'WOW! It is a Blackjack'
        isAlive = false
        result.wins += 1
        resultEl.innerHTML = `You won.<br>wins: ${result.wins}<br>losses: ${result.losses}`
    
    } else {
        messageEl.textContent = 'You are out of the game!'
        isAlive = false
        result.losses += 1
        resultEl.innerHTML = `You lose.Click on start game.<br>wins: ${result.wins}<br>losses: ${result.losses}`
    
    }
}
