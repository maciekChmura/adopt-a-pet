import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Results from "./Results";
import Details from "./Details";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt a pet!</h1>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

/*
Router -> Details -> 
:id is passed to Details as props -> this.props.id

*/
