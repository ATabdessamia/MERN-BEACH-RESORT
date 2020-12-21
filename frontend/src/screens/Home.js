import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import { fetchFeatured } from "../actions/index";
import ServiceSection from "../components/ServiceSection";
import FeaturedSection from "./FeaturedSection";

const Home = () => {
  const dispatch = useDispatch();
  const FeaturedRoom = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchFeatured());
  }, [dispatch]);

  if (!FeaturedRoom.length) {
    return (
      <div className="loading">
        <h4>rooms data loading....</h4>
        <img src="/images/gif/loading-gear.gif" alt="" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <ServiceSection />
      <FeaturedSection rooms={FeaturedRoom} />
    </>
  );
};

export default Home;
