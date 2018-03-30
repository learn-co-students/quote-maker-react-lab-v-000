import React, { Component } from 'react';
import uuid from 'uuid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

export class QuoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      author: ''
    }
  }

  handleOnChange = event => {
    const targetName = event.target.name
    this.setState({[targetName]: event.target.value})

    // const content = document.getElementsByName("content")[0].value;
    // const author = document.getElementsByName("author")[0].value;
    // this.setState({content, author})
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const quote = Object.assign({}, this.state, {id: uuid()});
    this.props.addQuote(quote);
    this.setState({content: '', author: ''})
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
                        className="form-control"
                        value={this.state.content}
                        name="content"
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input 
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleOnChange}
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
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(QuoteForm);

