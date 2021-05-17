// if (document.readyState == 'ready') {
//     window.addEventListener('DOMContentLoaded', ready)
// } else {ready()}

async function generateQuote() {
  try {
    const corsIssues = "https://cors-anywhere.herokuapp.com/";
    const appUrl =
      "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    const quoteUrl = await fetch(corsIssues + appUrl);
    const response = await quoteUrl.json();
    console.log(response);
  } catch (error) {
    console.log("something went wrong " + error);
  }
}

generateQuote();
