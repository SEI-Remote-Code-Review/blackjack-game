/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let cardDeck = []
let playerHand = []
let dealerHand = []
let gameWinner = null 



/*------------------------ Cached Element References ------------------------*/

const playerHandEl = document.getElementById('player-hand')
const dealerHandEl = document.getElementById('dealer-hand')
const playerHandValueEl = document.getElementById('player-value')
const dealerHandValueEl = document.getElementById('dealer-value')
const playbtn = document.getElementById('play-btn')
const hitbtn = document.getElementById('hit-btn')
const standbtn = document.getElementById('stand-btn')
const statusMsg = document.querySelector('.game-status')

/*----------------------------- Event Listeners -----------------------------*/
playbtn.addEventListener('click', playGame)
hitbtn.addEventListener('click', hit)
standbtn.addEventListener('click', stand)


/*-------------------------------- Functions --------------------------------*/

init ()

function init() {
  cardDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}


function playGame() {
  shuffleCards(cardDeck)
  dealCards()
  countHands(playerHand)
  countHands(dealerHand)
}


function shuffleCards(arr){
  for(var i =arr.length-1 ; i>0 ;i--){
      var j = Math.floor( Math.random() * (i + 1) );
      [arr[i],arr[j]]=[arr[j],arr[i]]; 
  }
}

function dealCards() {
  playerHand.push(cardDeck.pop())
  dealerHand.push(cardDeck.pop())
  playerHand.push(cardDeck.pop())
  dealerHand.push(cardDeck.pop())
  console.log(playerHand, dealerHand)
  console.log(cardDeck)
}



let ace = ["dA", "hA", "cA", "sA"]
let pictureCard = ["dK", "dQ", "dJ", "d10", "hK", "hQ", "hJ", "h10", "cK", "cQ", "cJ", "c10", "sK", "sQ", "sJ", "s10" ]
let nineSuits = ["d09", "h09", "c09", "s09"]
let eightSuits = ["d08", "h08", "c08", "s08"]
let sevenSuits = ["d07", "h07", "c07", "s08"]
let sixSuits = ["d06", "h06", "c06", "s06"]
let fiveSuits = ["d05", "h05", "c05", "s05"]
let fourSuits = ["d04", "h04", "c04", "s04"]
let threeSuits = ["d03", "h03", "c03", "s03"]
let twoSuits = ["d02", "h02", "c02", "s02"]

function cardValues(card) {
  let value
  
  if (ace.includes(card)) {
    value = 1 ?? 11
  }
  if (pictureCard.includes(card)) {
    value = 10
  }
  if (nineSuits.includes(card)) {
    value = 9
  }
  if (eightSuits.includes(card)) {
    value = 8
  }
  if (sevenSuits.includes(card)) {
    value = 7
  }
  if (sixSuits.includes(card)) {
    value = 6
  }
  if (fiveSuits.includes(card)) {
    value = 5
  }
  if (fourSuits.includes(card)) {
    value = 4
  }
  if (threeSuits.includes(card)) {
    value = 3
  }
  if (twoSuits.includes(card)) {
    value = 2
  }
  return value 
}

function countHands(hand) {
  let handTotal = 0

  for (let i = 0; i< hand.length; i++) {
    handTotal = handTotal + cardValues(hand[i])
}
console.log(handTotal)
return handTotal
}

function hit() {
  playerHand.push(cardDeck.pop())
  
  if(countHands(playerHand) > 21) {
    statusMsg.textContent = "Player BUSTS! Dealer Wins"
  }
}

function stand() {
  while(countHands(dealerHand) < 17) {
    dealerHand.push(cardDeck.pop())
    console.log(dealerHand)
}
if (countHands(dealerHand) > 21) {
  statusMsg.textContent = "Dealer BUSTS! Player Wins"
}

}