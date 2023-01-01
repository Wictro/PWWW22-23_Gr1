document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        {
            name: 'burger',
            img: '../images/burger.jpg'
        },
        {
            name: 'fries',
            img: '../images/fries.jpg'
        },
        {
            name: 'hotdog',
            img: '../images/hotdog.jpg'
        },
        {
            name: 'iceCream',
            img: '../images/ice-cream.jpg'
        },
        {
            name: 'milkshake',
            img: '../images/milkshake.jpg'
        },
        {
            name: 'pizza',
            img: '../images/pizza.jpg'
        },
        {
            name: 'burger',
            img: '../images/burger.jpg'
        },
        {
            name: 'fries',
            img: '../images/fries.jpg'
        },
        {
            name: 'hotdog',
            img: '../images/hotdog.jpg'
        },
        {
            name: 'iceCream',
            img: '../images/ice-cream.jpg'
        },
        {
            name: 'milkshake',
            img: '../images/milkshake.jpg'
        },
        {
            name: 'pizza',
            img: '../images/pizza.jpg'
        }
    ]
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