import React, { Component } from 'react';
import uuid from 'uuid';
import { bindActionCreators } from 'redux'; //line added.
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      author: "",
      content: "",
    }
  }

  handleOnChange = (event) => {
    const {value, name} = event.target
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addQuote({
      id: uuid(),
      author: this.state.author,
      content: this.state.content,
      votes: 0,
    })
    this.setState({
      author: "",
      content: "",
    });
  }
//slightly fancy way to copypasta state
  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   const quote = Object.assign({}, this.state, { id: uuid() });
  //   this.props.addQuote(quote);
  //   this.setState({
  //     content: '',
  //     author: ''
  //   });
  // }

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
                      <textarea
                        onChange={(event) => this.handleOnChange(event)}
                        name="content"
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        onChange={(event) => this.handleOnChange(event)}
                        name="author"
                        className="form-control"
                        type="text"
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(QuoteForm);
// soln...no need to mapDispatchToProps??
// export default connect(null, { addQuote })(QuoteForm);
