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

    default:
      return state;
  }
};

export default movies;
