const reducer = (state = { num: 1, data: {}, c_data: { name: "" } }, action) => {
  switch (action.type) {
    case "add_num":
      state.num += 1;
      return { ...state };
    case "set_data":
      state.data = { ...action.payload };
      return { ...state };
    case "update_data":
      state.c_data = { ...action.payload };
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
