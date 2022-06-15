import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Jarett Young",
      age: 41,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}, your age is {this.state.age}
          </p>
          <button
            onClick={() => {
              this.setState({ name: "Fred James", age: 64 });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
