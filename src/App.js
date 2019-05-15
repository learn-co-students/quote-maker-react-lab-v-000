import React, { Component } from 'react';
// we'll import the containers we need that will hold the
// components we'll use to render the UI we desire
import QuoteForm from './containers/QuoteForm';
import Quotes from './containers/Quotes';

// and here, we'll render the containers we imported above
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
        <Quotes />
      </div>
    );
  }
}

export default App;
