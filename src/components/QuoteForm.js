import React from 'react';
import { connect } from 'react-redux';

class QuoteForm extends React.Component {
  state = {
    content: '',
    author: ''
  }

  handleOnContentChange = event => {
    this.setState({
      content: event.target.value
    });
  }

  handleOnAuthorChange = event => {
    this.setState({
      author: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addQuote(this.state);
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="textarea"
            onChange={(event) => this.handleOnContentChange(event)}
            id="content"
            placeholder="quote" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnAuthorChange(event)}
            id="author"
            placeholder="author" />
        </p>
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
}

export default connect(null, mapDispatchToProps)(QuoteForm);
