import React from "react";
import Card from "./Card";

import Form from "./Form";
const Rooms = ({ rooms, max, min }) => {
  return (
    <section className="text-center p-5">
      <div className="services-title">
        <h4 className="fs-1 text-capitalize">search rooms</h4>
        <div className="mx-auto mb-4"></div>
      </div>
      <Form min={min} max={max} />
      {rooms.length > 0 ? (
        <div className="container-fluid pt-5">
          <div className="row row-cols-sm-4 justify-content-center align-items-center room-md">
            {rooms.map((room) => {
              return <Card room={room} key={room._id} />;
            })}
          </div>
        </div>
      ) : (
        <h4>Unfortunately No Rooms Matched Your Search Parameters</h4>
      )}
    </section>
  );
};

export default Rooms;
