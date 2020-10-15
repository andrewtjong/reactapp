import React from "react";

function Joke(props) {
  return (
    <div className="joke-card">
      <p style={{ display: props.question ? "block" : "none" }}>
        Question:{props.question}
      </p>
      <p>Punchline:{props.punchline}</p>
      <hr />
    </div>
  );
}

export default Joke;
