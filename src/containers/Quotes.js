// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import QuoteCard from '../components/QuoteCard';
// import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
//
//
// class Quotes extends Component {
//
//   render() {
//     return (
//       <div>
//         <hr />
//         <div className="row justify-content-center">
//           <h2>Quotes</h2>
//         </div>
//         <hr />
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               {/*
//                 TODO:
//
//                 Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
//                */}
//                {this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />)}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// //add arguments to connect as needed
// const mapStateToProps = state => {
//   return ({
//     quotes: state.quotes
//   })
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     removeQuote: () => {
//       dispatch(removeQuote())
//     },
//     upvoteQuote: () => {
//       dispatch(upvoteQuote())
//     },
//     downvoteQuote: () => {
//       dispatch(downvoteQuote())
//     },
//   };
// };
//
// // export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
// export default connect(mapStateToProps, mapDispatchToProps)(Quotes);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
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
              {quotes.map(quote => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
