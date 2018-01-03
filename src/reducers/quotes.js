import uuid from 'uuid';
export const uuiddFn = uuid;

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE': {
      return state.concat(action.quote);
    }

    case 'REMOVE_QUOTE': {
      const quotes = state.filter(quote => quote.id !== action.quoteId);
      return quotes;
    }

    case 'UPVOTE_QUOTE': {
      const idx = state.map(x => x.id).indexOf(action.quoteId);
      return state.map((quote, index) => (index === idx) ?
      {...quote, votes: quote.votes += 1 } : quote);
    }

    case 'DOWNVOTE_QUOTE': {
      const idx = state.map(x => x.id).indexOf(action.quoteId);
      if (state[idx]["votes"] !== 0) {
      return state.map((quote, index) => (index === idx) ?
      {...quote, votes: quote.votes -= 1 } : quote);
    } else {
      return state
    }
  }

    default: {
      return state;
    }
  }
}
