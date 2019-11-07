import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  
  renderQuotes = () => this.props.quote.map((quote, id) => <QuoteCard quote={quote} dispatch={this.props.dispatch}/>)

  render() {
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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

 const mapStateToProps = state => {
  return {
    quote: state.quote
  }
}

export default connect(mapStateToProps)(Quotes);
