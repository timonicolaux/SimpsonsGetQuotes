import DisplayQuote from "./components/DisplayQuote";
import React, { useState } from 'react';
import axios from 'axios';


const sampleQuote = {
  quote: "I'm sleeping in the bath tub.",
character: "Marge Simpson",
image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
characterDirection: "Right"

};


function App() {
  const [quote, setQuote] = useState(sampleQuote);
  const getQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      setQuote(data[0]);
    })
    }
  return (
    <div className="App">
      <DisplayQuote quote={quote}/>
      <button type="button" onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default App;
