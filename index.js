let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player_name = document.getElementById("name")
let name_btn = document.getElementById("name_enter")
let points = document.getElementById("points-el")

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let chips = 50;

name_btn.addEventListener("click" , function(){
    console.log(player_name.value)
    playerEl.textContent = player_name.value + " : $"
    points.textContent = chips
})


function getRandomCard(){
    let randomNumber =  Math.floor((Math.random()*13))+1
    if (randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0 ; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
        chips -= 10
    }
    
    else if(sum === 21){
        hasBlackJack = true
        message = "You've got Blackjack!!"
        chips += 150

    }
    else{
        isAlive = false
        message = "You're out of the game"
        chips = 50
    }
    
    messageEl.textContent = message
    points.textContent = chips
}


function newCard(){
    if(hasBlackJack === false && isAlive === true && chips > 0){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
    
}