const defaultState = {
  items: [],
  loading: false,
};

export const listMovieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "listMovie/start":
      return {
        ...state,
        loading: true,
      };

    case "listMovie/success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    default:
      return state;
  }
};
