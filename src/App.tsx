import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import Greeting from "./components/Greeting";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Clock />
        <Greeting message="Jonathan" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
