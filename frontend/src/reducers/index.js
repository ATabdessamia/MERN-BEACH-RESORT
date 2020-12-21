import { combineReducers } from "redux";
import {
  roomsReducers,
  roomsFiltredReducers,
  roomReducers,
} from "./roomReducers";

export default combineReducers({
  rooms: roomsReducers,
  room: roomReducers,
  roomsFiltred: roomsFiltredReducers,
});
