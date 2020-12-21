/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ room }) => {
  return (
    <div className="col-sm px-0 room me-2 mb-4 card-md">
      <div className="position-relative img-container">
        <img src={room.images[0]} className="d-block w-100" alt="single room" />
        <div className="position-absolute top-0 start-1 price-top">
          <h6>{room.price}</h6>
          <p className="per">per night</p>
        </div>
        <Link
          className="btn btn-outline-light btn-lg room-link"
          to={`/rooms/${room.slug}`}
        >
          Features
        </Link>
      </div>
      <p className="room-info text-capitalize fw-bolder text-dark">
        {room.name}
      </p>
    </div>
  );
};

export default Card;
