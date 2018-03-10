var card = document.querySelector('.sample-card-container .card');
var cardsContainer = document.querySelector('.cards-container');
var array1 = [0, 1, 2, 3, 4, 5, 6, 7];
var array2 = [0, 1, 2, 3, 4, 5, 6, 7];
var allCards = array1.concat(array2);
var openCard1;
var openCard2;
var state = 0;
var gameScore = 0;

function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
}

function openCard(card) {
  card.classList.add('flipped');
}

function closeCard(card) {
  card.classList.remove('flipped');
}

function areSameCards(firstCard, secondCard) {
  if (firstCard.querySelector('.front').innerHTML == secondCard.querySelector('.front').innerHTML) {
    return true;
  } else {
    return false;
  }
}

function handleClick(card) {
  if (!card.classList.contains('flipped')) {
    console.log('Closed');
    if (state == 0) {
      openCard(card);
      openCard1 = card;
      state = 1;
    } else {
      openCard(card);
      openCard2 = card;
      if (!areSameCards(openCard1, openCard2)) {
        setTimeout(function(){
          closeCard(openCard1);
          closeCard(openCard2);
        }, 500);
      }
      state = 0;
    }
  }
}

function createCards() {
  for(var i = 0; i < allCards.length; i++) {
    (function () {
      var cln = card.cloneNode(true);
      cln.querySelector('.front').innerHTML = allCards[i];
      cardsContainer.appendChild(cln);
      cln.addEventListener('click', function(){
        handleClick(cln);
      });
    }());
  }
}

function newGame() {
  shuffle(allCards);
  createCards();
}

newGame();
