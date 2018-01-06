import React from 'react'
import { addQuote } from '../actions/quotes.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class QuoteForm extends React.Component{

  constructor(){
    super()
    this.state = {
      content: '',
      author: ''
    }
  }

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  handleAuthorChange = (event) => {
    this.setState({
      author: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addQuote(this.state)
    this.setState({
      author: '',
      content: ''
    })
  }

  render(){
    return (
      <div>
        <form  onSubmit={event => this.handleOnSubmit(event)}>
          <p>Quote</p>
          <textarea name="content" onChange={event => this.handleContentChange(event)} />
          <p>Author</p>
          <input name="author" onChange={event => this.handleAuthorChange(event)} type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(QuoteForm)

