import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRoom } from "../actions/index";
import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";

const RoomInfo = ({ match }) => {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.room);
  const slug = match.params.slug;

  useEffect(() => {
    dispatch(fetchRoom(slug));
  }, [dispatch, slug]);

  if (!room.length) {
    return (
      <div className="loading">
        <h4>rooms data loading....</h4>
        <img src="/images/gif/loading-gear.gif" alt="" />
      </div>
    );
  }

  const style = {
    background: `url(${room[0].images[0]}) no-repeat center center/cover`,
  };

  return (
    <>
      <NavBar />
      <SubHeader
        title={room[0].name}
        btnTitle="back to rooms"
        clasS="twin-header"
        style={style}
        size="w-50 p-3 mt-5"
        to="/rooms"
      />
      <div className="container">
        <div className="row justify-content-center align-items-center mt-3  gy-5">
          {room[0].images.map((img) => {
            return (
              <div className="col-md" key={Math.random()}>
                <img
                  src={img}
                  alt={img}
                  className="img-fluid rounded mx-auto d-block"
                />
              </div>
            );
          })}
        </div>
        <div className="row mt-5  gy-3 font-monospace">
          <div className="col-md me-5">
            <h3 className="text-capitalize fs-1 fw-bold">details</h3>
            <p>{room[0].description}</p>
          </div>
          <div className="col-md text-capitalize">
            <h3 className="fs-1 fw-bold">info</h3>
            <h6 className="fs-4">price: ${room[0].price}</h6>
            <h6 className="fs-4">size: {room[0].size} SQFT</h6>
            <h6 className="fs-4">max capacity: {room[0].capacity} people</h6>
            {room[0].pets ? (
              <h6 className="fs-4">pets allowed</h6>
            ) : (
              <h6 className="fs-4">no pets allowed</h6>
            )}
            {room[0].breakfast ? (
              <h6 className="fs-4">free breakfast included</h6>
            ) : null}
          </div>
        </div>
        <div className="row my-5">
          <h3 className="text-capitalize fs-2 fw-bold">extras</h3>
          {room[0].extras.map((ext) => {
            return (
              <div className="col-md-4 " key={Math.random()}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{ext}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoomInfo;
