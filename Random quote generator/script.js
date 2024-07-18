const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const getQuoteButton = document.getElementById("get-quote-button");

const apiUrl = "https://api.quotable.io/random"; // Replace with your preferred quote API endpoint

function getQuote() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      quoteText.innerText = data.content;
      quoteAuthor.innerText = `- ${data.author}`;
    })
    .catch(error => {
      console.error("Error fetching quote:", error);
      quoteText.innerText = "Sorry, there was an error getting a quote.";
    });
}

// get quote button
getQuoteButton.addEventListener("click", getQuote);
