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



/*-------------------------------- Functions --------------------------------*/
