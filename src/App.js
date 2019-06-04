import React, { Component } from "react";
import MemeG from "./MemeG";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  render() {
    return (
      <div>
        <Header />
        <MemeG />
      </div>
    );
  }
}

export default App;
