import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes'; 
import { bindActionCreators } from 'redux';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      author: "", 
      content: "",
    }
  }

  handleAuthorChange = event => {
    this.setState ({ 
      author: event.target.value, 
    })
  }
  
  handleContentChange = event => { 
    this.setState ({ 
      content: event.target.value,
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();  
    debugger;
    this.props.addQuote(this.state); 
    this.setState({ 
      author: "",
      content: "",
    })
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
                        value={this.state.content} 
                        name= "content" 
                        onChange= {this.handleContentChange}
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
                        name= "author" 
                        onChange= {this.handleAuthorChange}
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



export default connect(null, {addQuote})(QuoteForm);