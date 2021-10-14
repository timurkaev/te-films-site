export const listMovie = () => {
  return (dispatch) => {
    dispatch({ type: "listMovie/start" });

    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "listMovie/success",
          payload: data,
        });
      });
  };
};
