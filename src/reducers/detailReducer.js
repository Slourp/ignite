const initState = {
  game: {},
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state, //Return all state, we're not modifing anything
        game: action.payload.game,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
