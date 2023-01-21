import React, { useState } from "react";
import Submit from "./Submit";

export default function TextArea(props) {
  const handleChange = function (e) {
    setText(e.target.value);
  };

  const capitalize = function () {
    setText(text.toUpperCase());
  };
  const lower = function () {
    setText(text.toLowerCase());
  };
  const clear = function () {
    setText("");
  };
  const copy = function () {
    try {
      navigator.clipboard.writeText(text);
      alert("copied");
    } catch (err) {
      // console.log("failed to copy");
    }
  alert('hello');
  };

  const removeExtraSpace = function () {
    setText(text.replace(/\s+/g, " "));
  };

  const [text, setText] = useState("");
  let theem = {
    color: "black",
    backgroundColor: "white",
    name: "darkmode",
  };
  let theem2 = {
    color: "white",
    backgroundColor: "black",
    name: "whitemode",
  };

  const handleTheme = function () {
    if (theme.name === "darkmode") {
      setTheme(theem2);
    } else {
      setTheme(theem);
    }
  };

  const [theme, setTheme] = useState(theem);

  return (
    <>
      <div className="container my-3">
        <form>
          <div
            style={
              props.mode === "dark"
                ? { backgroundColor: "#141724", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
            className="form-group margin"
          >
            <label className="space" htmlFor="exampleFormControlTextarea1">
              Enter text below..
            </label>
            <textarea
              style={
                props.mode === "dark"
                  ? { backgroundColor: "#788ca1", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
              placeholder="type here..."
              value={text}
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="container">
        <Submit name="Capitalize" onClick={capitalize} />
        <Submit name="lower" onClick={lower} />
        <Submit name="clear" onClick={clear} />
        <Submit name="copy" onClick={copy} />
        <Submit name="removeExtraSpace" onClick={removeExtraSpace} />
        {/* <Submit name={theme.name} onClick={handleTheme} /> */}

        <div
          style={
            props.mode === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          <h2>Summary of your words</h2>
          <h3>
            {text.split(" ").length}words {text.length}characters
          </h3>
          <h3>{(text.split(" ").length * 2.08) / 60} </h3>

          <p>{text === ""?"Enter text above to preview here ...":text}</p>
        </div>
      </div>
    </>
  );
}
