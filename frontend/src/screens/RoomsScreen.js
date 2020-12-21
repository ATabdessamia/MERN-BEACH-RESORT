import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";
import Rooms from "../components/Rooms";
import { fetchRooms, fetchRoomsBy } from "../actions/index";

const RoomsScreen = () => {
  const style = {
    background: "url(/images/room-2.jpeg) no-repeat center center/cover",
  };

  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  const roomsFiltred = useSelector((state) => state.roomsFiltred);

  const maxPrice = Math.max(...rooms.map((item) => item.price));
  const minPrice = Math.min(...rooms.map((item) => item.price));

  useEffect(() => {
    dispatch(fetchRooms());
    dispatch(fetchRoomsBy(""));
  }, [dispatch]);

  if (!rooms.length) {
    return (
      <div className="loading">
        <h4>rooms data loading....</h4>
        <img src="/images/gif/loading-gear.gif" alt="" />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <SubHeader
        title="our rooms"
        btnTitle="return home"
        clasS="twin-header"
        style={style}
        size="w-50 p-3 mt-5"
        to="/"
      />
      <Rooms rooms={roomsFiltred} min={minPrice} max={maxPrice} />
    </>
  );
};

export default RoomsScreen;
