import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";
import Alert from "./components/Alert";


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
        mode={mode}
        title={"Text Utills"}
        about="about us"
      />
      <Alert alert={alert} />
      <TextArea showAlert={showAlert} mode={mode} />

    </>
  );
}

export default App;
