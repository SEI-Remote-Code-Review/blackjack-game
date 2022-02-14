/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let cardDeck = []
let playerHand = []
let dealerHand = []
let playerHandValue = 0
let dealerHandValue = 0
let playerTurn = null
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
// playbtn.addEventListener('click', playGame)
// hitbtn.addEventListener('click', hitFunc)
// standbtn.addEventListener('click', standFunc)


/*-------------------------------- Functions --------------------------------*/

init ()

function init() {
  cardDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}
console.log(cardDeck)

// function playGame() {
  



//   }


function shuffleCards(arr){
  for(var i =arr.length-1 ; i>0 ;i--){
      var j = Math.floor( Math.random() * (i + 1) );
      [arr[i],arr[j]]=[arr[j],arr[i]]; 
  }
}
shuffleCards(cardDeck)
console.log(cardDeck)