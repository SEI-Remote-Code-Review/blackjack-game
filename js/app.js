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
const playbtn = document.getElementById('playbtn')
const hitbtn = document.getElementById('hitbtn')
const standbtn = document.getElementById('standbtn')
const statusMsg = document.querySelector('.game-status')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
