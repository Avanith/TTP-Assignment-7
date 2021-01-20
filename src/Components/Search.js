import React, { Component } from "react";

export class Search extends Component {
  constructor({ setter }) {
    super({ setter });
    this.state = {
      inputText: "",
    };
  } // END CONSTRUCTOR

  getInput = (e) => {
    this.setState({ inputText: e.target.value });
  }; // END GET INPUT

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      "http://api.giphy.com/v1/gifs/search?q=" +
        this.state.inputText +
        "&api_key=vi3HE2ik4LeZbAfCwHJUscAznZKSOJwM"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let urlArr = json.data.map((data) => {
          return data.images.original.url;
        });
        console.log(urlArr);
        this.props.setter(urlArr);
      });
  }; // END HANDLE SUBMIT

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input onChange={(e) => this.getInput(e)} type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  } // END RENDER
} // END CLASS SEARCH

export default Search;
