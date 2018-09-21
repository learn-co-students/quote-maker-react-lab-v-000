import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
   author: '',
   content: '',
   votes: 0,
   id: uuid()
  }

  handleOnChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addQuote(this.state)
    this.setState({
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="container"> 
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit} >
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        onChange={this.handleOnChange}
                        className="form-control" 
                        name='content'
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        name='author'
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return {quotes: state.quotes}
}

// const mapDispatchToProps = dispatch =>{
//   return {
//     addQuote: (quote) => {
//       dispatch(addQuote(quote))
//     }
//   }
// }
export default connect(mapStateToProps, {addQuote})(QuoteForm);
