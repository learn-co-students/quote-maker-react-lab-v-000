import React, { Component } from 'react';
import { ConnectedQuotes } from './components/Quotes';
import {ConnectedQuoteForm } from './components/QuoteForm';

export class App extends Component {
  render() {
    return <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: "12px" }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <div>
          <ConnectedQuoteForm  />
          <ConnectedQuotes />
        </div>
      </div>;
  }
}

export default App;
