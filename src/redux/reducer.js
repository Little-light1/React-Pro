const reducer = (state = { num: 1 }, action) => {
  switch (action.type) {
    case "add":
      return { ...state, ...action.payload };
    default:
      return { state };
  }
};

export default reducer;
