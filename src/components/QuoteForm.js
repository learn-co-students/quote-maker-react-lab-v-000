import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {
  constructor(){
  super()

  this.state = {
    //set up a controlled form with internal state
    content: '',
    author: ''
  }
}

  handleOnChange = event => {
    // Handle Updating Component State
    event.preventDefault();
    console.log("event...........", event.target)
    this.setState({
      // console.log("event...........", event)
      // content: event.target.value
      // ...this.state,
      [event.target.name]: event.target.value
    })

  }


  handleOnSubmit = event => {
    // Handle Form Submit event default
    // console.log("event2...........", event.target)
    console.log("props...........", this.props)
    console.log("this.state...........", this.state)
    console.log("this.state...........", this.state)


    event.preventDefault();
    this.props.addQuote(this.state)
    this.setState({
      content: '',
      author: ''
    })


  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal"  onSubmit={(event) => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea onChange={(event) => this.handleOnChange(event)}
                        className="content"
                        name="content"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input onChange={(event) => this.handleOnChange(event)}
                        className="author"
                        name="author"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4" >
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


const mapDispatchToProps = dispatch => {
  return {
    addQuote: formData => dispatch({ type: 'ADD_QUOTE', payload: formData }),
    removeQuote: quoteId => dispatch({type: 'REMOVE_QUOTE', quoteId: quoteId })
  }
}
//
// -always understand the structure of your store data
// -and make sure your reducers and your actions are actually communicating with each other,
// a common error is when the action isn't sending the kind of data to the reducer that you'd
// expect. like you thought it was sending an integer but it's a string. so always check if the
// action is sending the type of data that you're expecting.
// -and lastly just check if mapDispatchToProps is set up properly


//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
