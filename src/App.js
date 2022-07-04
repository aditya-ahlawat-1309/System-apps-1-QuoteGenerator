import { useState } from 'react';
import "font-awesome/css/font-awesome.min.css";
import './App.css';
function App() {
  const [quoteAuthorString, setQuoteAuthorString] = useState(
    "Unknown"
  );
  const [quoteTextString, setQuoteTextString] = useState(
    "To get something you have to do something"
  );

  let apiQuotes = [];
 const getQuotes = async () => {
    const apiURL = "https://type.fit/api/quotes";
    try {
      const response = await fetch(apiURL);
      apiQuotes = await response.json();
      console.log(apiQuotes.length)
      const quote =
        apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
        console.log(quote);
      if (!JSON.stringify(quote.author)) {
        setQuoteAuthorString("Unknown");
      } else {
        setQuoteAuthorString(quote.author);
      }
      setQuoteTextString(JSON.stringify(quote.text));
    } catch (err) {console.log(err);}
 }
  return (
    <div>
      <div>
        <div className="quote-container" id="quote-container">
          {/* Quote */}
          <div className="quote-text">
            {quoteTextString}
            <span id="quote" />
          </div>
          {/* Author */}
          <div className="quote-author">
            <span id="author">{quoteAuthorString}</span>
          </div>
          {/* Buttons */}
          <div className="button-container">
            <button id="new-quote" onClick={getQuotes}>
              New Quote
            </button>
          </div>
        </div>
        {/* Loader */}
        {/* <div className="loader" id="loader" /> */}
      </div>
    </div>
  );
}

export default App;
