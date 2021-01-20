import React from "react";
import "../App.css";

export default function DisplayGif({ url }) {
  return (
    <div>
      <img class="DisplayGif" src={url} alt="a gif"></img>
    </div>
  );
}
