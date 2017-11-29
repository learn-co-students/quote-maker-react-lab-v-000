import React, { Component } from 'react';
import QuoteForm from '../src/containers/QuoteForm';
import Quotes from '../src/containers/Quotes';

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm store={this.props.store} />
        <Quotes store={this.props.store} />
      </div>
    );
  }
}

export default App;
