import React, { Component } from "react";
import "./App.css";
import Form from "./component/Form"
import Print from "./component/Print"


// import Counter from "./component/Counter";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className= "heading">e-സത്യവാങ്മൂലം</h1>
        {/* <Counter /> */}
        <Form />
        <Print />
      </div>
    );
  }
}

export default App;
