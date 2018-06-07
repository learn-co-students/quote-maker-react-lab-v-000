import React from 'react'
import { connect } from 'react-redux';
import {addQuote} from '../actions/quotes'

class QuoteForm extends React.Component{
  constructor(){
    super()
    this.state = {
      author: '',
      content: ''
    }
  }

  render(){
    return(
      <div>
        <form>
          <label>Quote</label>
          <textarea name="content" />
          <label>Author</label>
          <input type="text" name="author" />  
        </form>  
      </div>
    )
  }  
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch)
}

export const ConnectedQuoteForm = connect(null,mapDispatchToProps)(QuoteForm)