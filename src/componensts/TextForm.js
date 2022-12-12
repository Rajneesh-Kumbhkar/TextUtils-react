import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("sentence has been upperCase..!", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("sentence has been Cleared..!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard ", "success");
  };
  const handleOnchange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className={`conatiner mb-2 my-2  w-100 text-${
          props.mode === "light" ? "#1e1e1e" : "#f5f5f5"
        }`}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form w-100 "
          id="textArea"
          rows="8"
          onChange={handleOnchange}
          value={text}
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={handleUpClick}
      >
        UpperCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={handleDownClick}
      >
        loverCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={handleClearClick}
      >
        Clear Text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={handleCopy}
      >
        Copy Text
      </button>
      <div
        className={`container mt-3 text-${
          props.mode === "light" ? "#1e1e1e" : "#f5f5f5"
        }`}
      >
        <h2>Your Text Summery</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} character
        </p>
        <p>
          {(
            0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          ).toFixed(3)}{" "}
          Minutes read{" "}
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  );
}
