/* eslint-disable array-callback-return */
import React from "react";
import Card from "../components/Card";

const FeaturedSection = ({ rooms }) => {
  return (
    <section className="featured text-center p-5">
      <div className="featured-title my-3">
        <h4 className="fs-1 text-capitalize">featured rooms</h4>
        <div className="mx-auto mb-5"></div>
      </div>
      <div className="container">
        <div className="row room-sm">
          {rooms.map((room) => {
            return <Card room={room} key={room._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
