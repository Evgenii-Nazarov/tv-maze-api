const initialState = {
  movies:[]
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
      const data = action.payload;
      return {
        ...state,
        ...data,
      };

    case "RESET_STATE":
      return initialState

    case "RESET_STATE1":
      return state

    case "AAAAAAA":
      return state

    default:
      return state;
  }
};

export default movies;
