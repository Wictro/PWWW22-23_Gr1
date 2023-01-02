var quotes = document.getElementById("quotesContent")
const worker = new Worker('./utils/quotes.js');

worker.onmessage = function (event) {
  showQuotes(event.data);
}

function showQuotes(data) {
  quotes.innerHTML = data
}