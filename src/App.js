import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked a title");
  }

  render() {
    return (
      <div>
        <h1>Adopt a pet!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Dodo" animal="bird" breed="Cockotail" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
