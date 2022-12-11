import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="conatiner mb-3 w-100">
        <h1>{props.heading}</h1>
        <textarea
          className="form w-100"
          id="textArea"
          rows="8"
          onChange={handleOnchange}
          value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleDownClick}>
        loverCase
      </button>
      <div className="container">
        <h2>Your Text Summery</h2>
        <p>
          {text.split(" ").length} words and {text.length} charater
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(3)} Minutes read </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
