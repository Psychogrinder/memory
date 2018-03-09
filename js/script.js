var card = document.querySelector('.sample-card-container .card');
var cardsContainer = document.querySelector('.cards-container');
var array1 = [0, 1, 2, 3, 4, 5, 6, 7];
var array2 = [0, 1, 2, 3, 4, 5, 6, 7];
var allCards = array1.concat(array2);



function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
}

function createCards() {
  for(var i = 0; i < allCards.length; i++) {
    (function () {
      var cln = card.cloneNode(true);
      cln.querySelector('.front').innerHTML = allCards[i];
      cardsContainer.appendChild(cln);
      cln.addEventListener('click', function(){
      cln.classList.add('flipped');
      });
    }());
  }
}

function newGame() {
  shuffle(allCards);
  createCards();
}

newGame();
