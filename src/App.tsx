import React from "react";
import logo from "./logo.svg";
import myLogo from "./my-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myLogo} className="App-logo" alt="logo" />
        <p>Welcome to my portfolio!</p>
      </header>
    </div>
  );
}

export default App;
