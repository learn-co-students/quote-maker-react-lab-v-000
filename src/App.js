import React, { Component } from 'react';
import QuoteForm from './containers/QuoteForm.js'
import Quotes from './containers/Quotes.js'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        {/*
          TODO:

          Render QuoteForm and Quotes Components
         */
        <QuoteForm />
        }
        <div>
        {<Quotes />}
        </div>

      </div>
    );
  }
}

export default App;
