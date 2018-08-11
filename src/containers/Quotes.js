import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

export class Quotes extends Component {

  render() {
    // let quotes = this.props.quotes.map(quote => <div key={quote.id}><p>{quote.content}</p><p>{quote.author}</p></div>);
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* {quotes} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
