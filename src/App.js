import React, { Component } from 'react';
import { ConnectedQuotes} from './containers/Quotes'
import { ConnectedQuoteForm } from './containers/QuoteForm'

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <ConnectedQuoteForm />
        <ConnectedQuotes />
      </div>
    );
  }
}

export default App;
