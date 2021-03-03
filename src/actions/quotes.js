export const addQuote = (formData) => {
  console.log("action", formData);
  return {
    type: "ADD_QUOTE",
    quote: formData,
  };
};
