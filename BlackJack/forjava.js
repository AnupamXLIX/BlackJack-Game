let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.querySelector("#player-el")

let player = {
    name: "Drog",
    chips: 134
}

playerEl.textContent = player.name + ": $" + player.chips
function startGame() {
    hasBlackjack = false
    isAlive = true
    let firstCard = randomCard()
    // let secondCard = randomCard()
    sum = firstCard 
    // + secondCard
    cards = [firstCard]
    renderGame()
}

function randomCard() {
    let num = Math.floor(Math.random() * 13) + 1

    if (num === 1) {
        console.log(num)
        return 11
    } else if (num > 10) {
        console.log(num)
        return 10
    } else {
        console.log(num)
        return num
    }
}

function renderGame() {

    if (sum <= 20)
    {
        message = ("Do you want to draw a card?")
    }else if (sum === 21)
    {
        message = ("Woohoo! You have got Blackjack!")
        hasBlackjack = true
    }else
    {
        message = ("You are out of the game!")
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    let results = "Cards: "
    for (let index = 0; index < cards.length; index++) {
        results += cards[index]
        if (index < cards.length - 1)
            results += ", "
    }
    cardsEl.textContent = results
}

function newCard()  {

    if (hasBlackjack === false && isAlive === true){
    let card = randomCard()
    sum += card
    cards.push(card)
    renderGame()
    } else {
        message = ("Cant add more")
        messageEl.textContent = message
    }
    
}