document.addEventListener('DOMContentLoaded', () => {
    function Cards(name, img) {
        this.name = name;
        this.img = img;
    }
    const card1 = new Cards('burger', '../images/burger.jpg');
    const card2 = new Cards('fries', '../images/fries.jpg');
    const card3 = new Cards('hotdog', '../images/hotdog.jpg');
    const card4 = new Cards('iceCream', '../images/ice-cream.jpg');
    const card5 = new Cards('milkshake', '../images/milkshake.jpg');
    const card6 = new Cards('pizza', '../images/pizza.jpg');
    const card7 = new Cards('burger', '../images/burger.jpg');
    const card8 = new Cards('fries', '../images/fries.jpg');
    const card9 = new Cards('hotdog', '../images/hotdog.jpg');
    const card10 = new Cards('iceCream', '../images/ice-cream.jpg');
    const card11 = new Cards('milkshake', '../images/milkshake.jpg');
    const card12 = new Cards('pizza', '../images/pizza.jpg');
    
    const cards = [ card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12 ];
    cards.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const result = document.querySelector('#result')
    var chosenCards = []
    var chosenCardsIds = []
    var guessedCards = []

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const firstOptionId = chosenCardsIds[0]
        const secondOptionId = chosenCardsIds[1]
        if (chosenCards[0] === chosenCards[1])  {
            // alert('A match has been found! Congrats!');
            cards[firstOptionId].setAttribute('src', '../images/blank.png');
            cards[secondOptionId].setAttribute('src', '../images/blank.png');
            guessedCards.push(chosenCards);
        }
        else {
            cards[firstOptionId].setAttribute('src', '../images/card.jpg');
            cards[secondOptionId].setAttribute('src', '../images/card.jpg');
            //alert('No match found! Try again!')
        }
        chosenCards = []
        chosenCardsIds = []
        result.textContent = guessedCards.length;
        if (guessedCards.length === cards.length/2) {
            result.textContent = 'Congratulations! You matched all of the cards!'
        }
    }

    function boardDesign() {
        cards.map((item, index) => {
            var card = document.createElement('img');
            card.setAttribute('src', '../images/card.jpg');
            card.setAttribute('data-id', index)
            card.addEventListener('click', flip)
            grid.appendChild(card)
        })
    }

    function flip() {
        var id  = this.getAttribute('data-id')
        chosenCards.push(cards[id].name)
        chosenCardsIds.push(id)
        this.setAttribute('src', cards[id].img)
        chosenCards?.length === 2 ? setTimeout(checkForMatch, 500) : {}
    }

    boardDesign();
})