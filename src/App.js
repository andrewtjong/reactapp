import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends React.Component {
  constructor() {
    super()
    this.super = {
      isLoggedIn: false
    }
  }
  render() {
    return(
      <div>
      <h1>You are currently logged {this.super.isLoggedIn ? "in" : "out"}</h1>
  </div>

    )
  }
}

export default App




// import React from "react";
// import productsData from "./vschoolProducts";
// import Product from "./components/Product";

// function App() {
//   const productComponents = productsData.map(item => 
//     <Product key={item.id} product={item} />)

//   return (
//     <div>
//     {productComponents}
//     </div>
//   )
//   }
// export default App

// // const jokeComponents = jokesData.map((joke) => (
// //   <Joke key={joke.id} question={joke.question} punchJoke={joke.punchLine} />
// // ));

// // return <div>{jokeComponents}</div>;