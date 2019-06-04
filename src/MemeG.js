import React, { Component } from "react";
import { connect } from "react-redux";

class MemeG extends Component {
  constructor() {
    super();
    this.state = {
      toptext: "",
      bottomtext: "",
      imglink: "https://i.imgflip.com/1bij.jpg",
      allData: []
    };
    this.handleBottomtext = this.handleBottomtext.bind(this);
    this.handleToptext = this.handleToptext.bind(this);
    this.handleGen = this.handleGen.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        let meme = response.data.memes;
        // console.log(meme[0]);
        this.setState({ allData: meme });
        //console.log(this.state.allData)
      });
  }
  handleToptext(event) {
    //console.log(this.state.bottomtext);
    this.setState({
      toptext: event.target.value
    });
  }

  handleBottomtext(event) {
    //console.log(this.state.toptext);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleGen(event) {
    event.preventDefault();
    const random = Math.floor(Math.random() * this.state.allData.length);
    const randmlink = this.state.allData[random].url;
    this.setState({ imglink: randmlink });
  }

  render() {
    return (
      <form onSubmit={this.handleGen}>
        <button type="Submit">Gen</button>
        <br />
        <input
          type="text"
          placeholder="toptext"
          name="toptext"
          value={this.state.toptext}
          onChange={this.handleToptext}
        />

        <input
          type="text"
          name="bottomtext"
          placeholder="bottomtext"
          value={this.state.bottomtext}
          onChange={this.handleBottomtext}
        />
        <div className="Box">
          <header className="headtext">{this.state.toptext}</header>
          <img src={this.state.imglink} />
          <footer className="foottext">{this.state.bottomtext}</footer>
        </div>
      </form>
    );
  }
}

export default MemeG;
