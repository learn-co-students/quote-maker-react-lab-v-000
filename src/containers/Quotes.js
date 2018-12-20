import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

    handleRemove = () => {
        debugger;
    }

    renderQuotes = () => {
        return this.props.quotes.map(quote => {
            return <QuoteCard quoteInfo={quote} handleRemove={this.handleRemove}/>
        })
    }

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
              { this.renderQuotes() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return { quotes: state.quotes}
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps)(Quotes);
