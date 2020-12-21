import axios from "axios";

export const fetchFeatured = () => async (dispatch) => {
  const { data } = await axios.get("/api/rooms?featured=true");

  dispatch({ type: "FETCH_FEATURED", payload: data.data.rooms });
};

export const fetchRooms = () => async (dispatch) => {
  const { data } = await axios.get("/api/rooms");

  dispatch({ type: "FETCH_ROOMS", payload: data.data.rooms });
};

export const fetchRoomsBy = (query) => async (dispatch) => {
  const { data } = await axios.get(`/api/rooms?${query}`);

  dispatch({ type: "FETCH_ROOMS_BY", payload: data.data.rooms });
};

export const fetchRoom = (slug) => async (dispatch) => {
  const { data } = await axios.get(`/api/rooms/${slug}`);

  dispatch({ type: "FETCH_ROOM", payload: data.data.room });
};
