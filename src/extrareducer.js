// sample code
// Array based approch

const streamReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map((stream) => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
      return state;
  }
};

//object based approch

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      //   const newState = { ...state };
      //   newState[action.payload.id] = action.payload;
      //   return newState;

      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
