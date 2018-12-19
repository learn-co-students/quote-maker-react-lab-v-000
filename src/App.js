import React, { Component } from 'react';
import QuoteForm from './containers/QuoteForm';
import Quotes from './containers/Quotes';
/*import QuoteForm and Quotes components */


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        {/*render QuoteForm and Quotes components */}
          <QuoteForm />
          <Quotes />
      </div>
    );
  }
}

export default App;
