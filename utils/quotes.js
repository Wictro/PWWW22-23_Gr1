const foodQuotes = ["Food is our common ground, a universal experience.- James Beard",
                    "Food is not rational. Food is culture, habit, craving and identity. - Jonathan Saffron Foer",
                    "The only thing I like better than talking about food is eating. - John Walters",
                    "Food is not just fuel, it's an experience. - Jamie Oliver",
                    "Life is uncertain. Eat dessert first. - Ernestine Ulmer",
                    "All happiness depends on a leisurely breakfast. - John Gunther",
                    "The only thing I like better than talking about food is eating. - John Walters",
                    "There is no love sincerer than the love of food. - George Bernard Shaw"
]


let i = 0;

function generateQuotes() {
  if(i>(foodQuotes.length-1)){
    i = 0
  }
  const data = foodQuotes[i]
  i++;
  postMessage(data);
}

setInterval(generateQuotes, 3500);