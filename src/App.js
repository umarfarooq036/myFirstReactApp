import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from "./components/Navbar"; // importing navbar component to use it in app file
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [TextColor, setTextColor] = useState("black");
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      setTextColor("white");
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark Mode Enabled", "success");
      document.title = 'Text Utils - Dark Mode'
    }
    else {
      setMode("light");
      setTextColor("black");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode Enabled", "success");
      document.title = 'Text Utils - Light   Mode'
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Text_Utils" abouttext="About TextUtils" mode={mode} toggleMode={toggleMode} TextColor={TextColor} showAlert={showAlert} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About  mode = {mode}  showAlert = {showAlert}/>}></Route>
          <Route
            exact path="/" element={<TextForm heading="Enter the text to analyze." mode={mode} showAlert={showAlert} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;