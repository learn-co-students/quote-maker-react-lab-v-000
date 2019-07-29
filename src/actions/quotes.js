export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote
  };
};

export const removeQuote = id => {
  return {
    type: 'REMOVE_QUOTE',
    id
  };
};
