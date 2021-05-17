
// if (document.readyState == 'ready') {
//     window.addEventListener('DOMContentLoaded', ready)
// } else {ready()}
let quoteText = document.querySelector(".quote-text");
let authorQuote = document.querySelector('.author')
let quote = document.querySelector('.inner-box')
let loader = document.querySelector('.loader')
let twitter = document.querySelector(".fa-twitter");
let more  = document.querySelector(".more")

function load() {
    loader.hidden = false
    quote.hidden = true
}

function loadComplete() {
    if (!loader.hidden) {
        quote.hidden = false
        loader.hidden = true
    }
}

async function generateQuote() {
    try {
      load()
    const quoteUrl = await fetch("https://api.quotable.io/random");
      const response = await quoteUrl.json();
      const { author, content } = response
      quoteText.textContent = content;
      authorQuote.textContent = author
      loadComplete()
  } catch (error) {
    console.log("something went wrong " + error);
  }
}


generateQuote();

twitter.addEventListener('click', () => {
    const tweetTo = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorQuote.innerText} `
    window.open(tweetTo , '_blank')
})

more.addEventListener('click', generateQuote)
