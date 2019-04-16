import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {
  upvoteQuote,
  downvoteQuote,
  removeQuote
} from '../actions'
class Quotes extends Component {

  render() {

    const quotes = this.props.quotes.map(q => <QuoteCard
        content={q.content}
        author={q.author}
        votes={q.votes}
        id={q.id}
        key={q.id}
        onUpvote={(id) => this.props.upvote(id)}
        onDownvote={(id) => this.props.downvote(id)}
        onRemove={(id) => this.props.remove(id)}
      />)

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ quotes }) => ({ quotes })

const mapDispatchToProps = (dispatch) => ({
  upvote: (id) => dispatch(upvoteQuote(id)),
  downvote: (id) => dispatch(downvoteQuote(id)),
  remove: (id) => dispatch(removeQuote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
