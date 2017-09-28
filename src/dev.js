import React from "react";
import Flag from "./Flag.js";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Flag
          name="CA"
          format="png"
          pngSize={64}
          shiny={true}
          alt="Canada Flag"
        />
      </div>
    );
  }
}

React.render(<App />, document.body);
