/* eslint-disable import/no-anonymous-default-export */
export const roomsReducers = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FEATURED":
      return action.payload;
    case "FETCH_ROOMS":
      return action.payload;
    default:
      return state;
  }
};

export const roomsFiltredReducers = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ROOMS_BY":
      return action.payload;
    default:
      return state;
  }
};

export const roomReducers = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ROOM":
      return action.payload;
    default:
      return state;
  }
};
