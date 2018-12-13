import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
      content: '',
      author: ''
  }

  handleOnChange = event => {
    //Handle updating component state
    this.setState({
      [event.target.name]: event.target.value
    })
    //another way to write it:
    // const { value, name } = event.target;
    // this.setState({
    //   [name]: value
    // });
  }

  handleOnSubmit = event => {
     // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state
    const quote = {
      author: this.state.author,
      content: this.state.content,
      id: uuid(),
      votes: 0
    };
    //OR another way to write it:
    // const quote = {...this.state, id: uuid() };
    // Pass quote object to action creator
    this.props.addQuote(quote);
    // Update component state to return to default state
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
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="author"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add Quote</button>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     addQuote: () => {
//       dispatch(addQuote())
//     }
//   };
// };

//add arguments to connect as needed
// make a dispatch action to Redux using action addQuote() that will
//take a quote as an argument and start the reducer process
export default connect(null, {addQuote})(QuoteForm);
