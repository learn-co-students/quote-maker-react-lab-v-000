import React from 'react'
import { Component } from 'react'

export class QuoteCard extends Component {
  render () {
    const {quote, upvoteQuote, downvoteQuote, removeQuote} = this.props
    return (
      <div>
        <div className='card card-inverse card-success card-primary mb-3 text-center'>
          <div className='card-block'>
            <blockquote className='card-blockquote'>
              <p>{quote.content}</p>
              <footer>- author <cite title='Source Title'>{quote.author}</cite></footer>
            </blockquote>
          </div>
          <div className='float-right'>
            <div className='btn-group btn-group-sm' role='group' aria-label='Basic example'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={(e) => upvoteQuote(e)}
              >
            Upvote
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={(e) => downvoteQuote(e)}
              >
            Downvote
              </button>
              <button
                type='button'
                className='btn btn-danger'
                onClick={(e) => removeQuote(e)}
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div>Votes: {this.props.votes}</div>
          </div>
        </div>
      </div>
    )
  }
}
