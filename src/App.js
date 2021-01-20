import React from "react";
import DisplayGif from "./Components/DisplayGif";
import Search from "./Components/Search";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: [],
    }; // bind methods to the state below declaring the state object
    // the name "gifSetter" is a custom name and can be anything?
    this.gifSetter = this.setGif.bind(this);
  } //END CONSTRUCTOR

  setGif(value) {
    this.setState({ gif: value.data });
    console.log(value);
  } // END SET GIF

  // When app mounts, load trending gifs
  componentDidMount() {
    fetch(
      "http://api.giphy.com/v1/gifs/trending?api_key=vi3HE2ik4LeZbAfCwHJUscAznZKSOJwM"
    ) // json seems to be how we access the data that we fetched.
      .then((response) => response.json())
      .then((json) => {
        this.setState({ gif: json.data });
      });
  } // END COMPONENT DID MOUNT

  render() {
    let display;
    if (this.state.gif.length > 0) {
      display = [];
      console.log(this.state.gif);
      for (let i = 0; i < this.state.gif.length; i++) {
        display.push(
          <DisplayGif url={this.state.gif[i].images.original.url}></DisplayGif>
        );
      } // END FOR LOOP
    } else {
      display = <div>Nothing</div>;
    } // END IF ELSE
    return (
      <div className="App">
        <Search setter={this.gifSetter}></Search>
        {display}
      </div>
    );
  } // END RENDER
}

export default App;
