import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';


class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleOnContentChange = event => {
    this.setState({
      // using a reference to a key, a variable pointing to a key, necessitates square brackets
      [event.target.name]: event.target.value
  })
}

  handleOnSubmit = event => {

    event.preventDefault();
    const quote = {
      ...this.state,
      id: uuid()
    }
    
    this.props.addquote(quote)
    this.setState({content: '', author: ''})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={(event) => this.handleOnSubmit(event)} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea onChange={this.handleOnContentChange}
                        className="form-control"
                        value={this.state.content}
                        name="content"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input onChange={this.handleOnContentChange}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
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

const mapDispatchToProps = (dispatch) => {
  return {
    addquote: (quote) => {dispatch(addQuote(quote))},
  }
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
