import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About.js";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // const greenMode = ()=>{
  //   if(mode === "primary"){
  //     setmode("danger");
  //   }
  //   else{
  //     setmode("primary")
  //   }

  // }

  const togglemode = function () {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode hasbeen enabled successfully", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#141724";
      document.body.style.color = "black";
      showAlert("Dark mode hasbeen enabled successfully", "success");
    }
  };

  return (
    <>
      <Navbar
        onClick={togglemode}
        // greenMode={greenMode}
        mode={mode}
        title={"Text Utills"}
        about="about us"
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element=<About />></Route>
          <Route path="/home" element=<TextArea showAlert={showAlert} mode={mode}/>></Route>
          <Route
            path="/"
            element=<TextArea showAlert={showAlert} mode={mode} />
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
