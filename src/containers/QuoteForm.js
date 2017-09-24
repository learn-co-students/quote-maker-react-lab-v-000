import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import uuid from 'uuid';

const initialState = {content: '', author: ''};

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = initialState;
  }

  handleOnChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addQuote(Object.assign({}, this.state, {id: uuid(), votes: 0}));
    this.setState(initialState);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event) => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea name='content'
                        className="form-control"
                        onChange={(event) => this.handleOnChange(event)}
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input name='author'
                        className="form-control"
                        type="text"
                        onChange={(event) => this.handleOnChange(event)}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addQuote}, dispatch);
}

export default connect(null, mapDispatchToProps)(QuoteForm);
