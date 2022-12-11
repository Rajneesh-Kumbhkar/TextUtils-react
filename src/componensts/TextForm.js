import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="fo"
          id="textArea"
          rows="8"
          onChange={handleOnchange}
          value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        UpperCase
      </button>
    </>
  );
}
