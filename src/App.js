import React from "react";
import DisplayGif from "./Components/DisplayGif";
import Search from "./Components/Search";
import Random from "./Components/Random";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: [],
    }; // bind methods to the state below declaring the state object
    // the name "gifSetter" is a custom name and can be anything?
    this.setGif = this.setGif.bind(this);
  } //END CONSTRUCTOR

  setGif(value) {
    this.setState({ gif: value });
    console.log(value);
  } // END SET GIF

  // When app mounts, load trending gifs
  componentDidMount() {
    fetch(
      "http://api.giphy.com/v1/gifs/trending?api_key=vi3HE2ik4LeZbAfCwHJUscAznZKSOJwM"
    ) // json seems to be how we access the data that we fetched.
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let urlArr = json.data.map((data) => {
          return data.images.original.url;
        });
        console.log(urlArr);
        this.setState({ gif: urlArr });
      });
  } // END COMPONENT DID MOUNT

  render() {
    let display;
    if (this.state.gif.length > 0) {
      display = [];
      console.log(this.state.gif);
      for (let i = 0; i < this.state.gif.length; i++) {
        display.push(<DisplayGif url={this.state.gif[i]} />);
      } // END FOR LOOP
    } else {
      display = <div>Nothing</div>;
    } // END IF ELSE
    return (
      <div className="App">
        {console.log(typeof this.props)}
        {console.log(this.props)}
        <Random setter={this.setGif} />
        <Search setter={this.setGif}></Search>
        {display}
      </div>
    );
  } // END RENDER
}

export default App;
