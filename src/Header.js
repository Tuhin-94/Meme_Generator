import React, { Component } from "react";
import "./styles.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  render() {
    return <h1 className="Head">Memes</h1>;
  }
}

export default Header;
