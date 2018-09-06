import React, { Component } from "react";
import Quotes from "./containers/Quotes";
import QuoteForm from "./containers/QuoteForm";

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="row title justify-content-center"
          style={{ paddingTop: "12px" }}
        >
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <div>
          <QuoteForm />
          <Quotes />
        </div>
      </div>
    );
  }
}

export default App;
