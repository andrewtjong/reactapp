import React from "react";
import Joke from "./components/Joke";

function App() {
  return (
    <div>
      <Joke punchline="only punchline" />

      <Joke
        question="What did the five fingers say to the face?"
        punchline="SLAP, Rick James bitch"
      />

      <Joke
        question="How does NASA organize their company parties?"
        punchline="They planet"
      />

      <Joke
        question="What did Jay-Z call his girlfriend before they got married?"
        punchline="Feyoncé"
      />

      <Joke
        question="How many kids with ADHD does it take to change a light bulb?"
        punchline="Let’s go play on our bikes"
      />

      <Joke
        question="What do you call a big pile of kittens? "
        punchline="A meowntain"
      />
    </div>
  );
}

export default App;
