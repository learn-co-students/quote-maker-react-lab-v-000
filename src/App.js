import React, { Component } from 'react';
import QuoteForm from './containers/QuoteForm'
import Quotes from './containers/Quotes'
import { connect } from 'react-redux';


class App extends Component {
  render() {
    console.log(this.props.quotes)
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
        <Quotes />
        {/*
          TODO:


          Render QuoteForm and Quotes Components
         */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

export default connect(mapStateToProps)(App);

