var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "-- Oscar Wilde"
  },
  {
    quote: "“So many books, so little time.”",
    author: "-- Frank Zappa"
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "-- Marcus Tullius Cicero"
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "-- Mae West"
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "-- Mahatma Gandhi"
  },
  {
    quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "-- Robert Frost"
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "-- Mark Twain"
  },
  {
    quote: "“Beware of what you become in pursuit of what you want.”",
    author: "-- Jim Rohn"
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "-- Elbert Hubbard"
  },
  {
    quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "-- Oscar Wilde"
  },
  {
    quote: "“The best revenge is massive success.”",
    author: "-- Frank Sinatra"
  },
  {
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
    author: "-- Oscar Wilde"
  }
];

var btn = document.getElementById('btn');
var quote = document.getElementById('quote');
var author = document.getElementById('author');

var lastRandomQuoteIndex = -1;

btn.onclick = function() {

  // create random index
  var randomQuoteIndex = Math.floor(Math.random() * quotes.length);

  // if random quote index equal last qoute index 
  // change random quote index so the random quote index never repeat 😄
  if (randomQuoteIndex === lastRandomQuoteIndex) {
    randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  }

  // create random quote
  var randomQuote = quotes[randomQuoteIndex];

  // diplay quote and author in html
  quote.innerHTML = randomQuote.quote;
  author.innerHTML = randomQuote.author;

  // update the last quote index with current random quote index
  lastRandomQuoteIndex = randomQuoteIndex;
  
}
