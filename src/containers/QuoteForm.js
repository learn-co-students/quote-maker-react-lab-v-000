import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      author: '',
      content: '',
    }
  }

  handleOnChange = event => {
    if (event.target.name === "author"){
      this.setState({
        author: event.target.value
      })
    } else {
      this.setState({
        content: event.target.value
      })
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addQuote(Object.assign({}, this.state, { id: uuid() }));
    this.setState({
      author: '',
      content: ''
    })
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
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
                      <textarea
                        className="form-control"
                        value={this.state.content}
                        name="content"
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
                        onChange={(event) => this.handleOnChange(event)}
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

// function mapStateToProps(state){
//   return {quotes: state}
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     addQuote: addQuote
//   }, dispatch);
// }
//
// export const ConnectedQuotesForm = connect(mapStateToProps, mapDispatchToProps)(QuoteForm)
export default connect(null, {addQuote})(QuoteForm);
