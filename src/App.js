import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked a title");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt a pet!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Dodo",
        animal: "bird",
        breed: "Cockatail"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "cat",
        breed: "mix"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
