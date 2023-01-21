import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React,{useState} from 'react';



function App() {

  const [mode, setmode] = useState('light')

  const togglemode =  function(){
    if(mode === "dark"){
      setmode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color ="black";
    }
    else{
      setmode("dark")
      document.body.style.backgroundColor="#141724";
      document.body.style.color ="black";
    }
  }

  return (<>
    <Navbar onClick={togglemode} mode={mode} title={"Text Utills"} about="about us"/>
    <TextArea mode={mode}  />
    </>

  );
}

export default App;
