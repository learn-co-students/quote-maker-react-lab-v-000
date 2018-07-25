import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

//extra export required here for testing purposes
export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: "",
      author: ""
    }
  }

  handleOnChangeContent = event => {
    this.setState({
      content: event.target.value,
    });
  }
  handleOnChangeAuthor = event => {
    this.setState({
      author: event.target.value,
    });
  }

    handleOnSubmit = event => {
    event.preventDefault();
    const quote = Object.assign({}, this.state, { id: uuid() });
    this.props.addQuote(quote);
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
                <form className="form-horizontal" onSubmit={(e)=>{this.handleOnSubmit(e)}}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">

                      <textarea
                        onChange={this.handleOnChangeContent}
                        className="form-control"
                        value={this.state.content}
                        name="content"
                      />

                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        onChange={this.handleOnChangeAuthor}
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

export default connect(null, {})(QuoteForm);
