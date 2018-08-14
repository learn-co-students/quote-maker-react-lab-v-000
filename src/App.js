import React, { Component } from 'react';
import QuoteForm from './containers/QuoteForm.js'
import Quotes from './containers/Quotes.js'
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quotes: []
    }
    this.updateVotes = this.updateVotes.bind(this)
  }

  updateVotes(quoteId) {
    const quote = this.state.quotes.find(quote => quote.id === quoteId)
    debugger
    return quote ? quote.votes : 0
  }

  render() {
    return (
      <div className="container-fluid">
        <div 
          className="row title justify-content-center" 
          style={{ paddingTop: '12px' }}
        >
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
        <Quotes quotes={this.props.quotes} updateVotes={this.updateVotes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps)(App);
