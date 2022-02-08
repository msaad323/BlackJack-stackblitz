let cards = [];
let msg = '';
let hasBlackJack = false;
let isAlive = false;
let sum = 0;
let player = {
  name: 'sean',
  chips: 200,
};

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) return 10;
  else if (randomNum === 1) return 11;
  else return randomNum;
}
console.log(cards);

let msgEl = document.getElementById('msg-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');
let playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ': $' + player.chips;

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  if (sum < 21) {
    msg = 'Do you wanna draw another card ?';
    isAlive = true;
  } else if (sum === 21) {
    msg = "Wohoo!! you've won the game.";
    hasBlackJack = true;
  } else {
    msg = "you're out of the game";
    isAlive = false;
  }
  msgEl.textContent = msg;
  sumEl.textContent = 'Sum: ' + sum;
  cardEl.textContent = 'Cards:';
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += ` ${cards[i]} `;
  }
}

const newCard = () => {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
};
