import React from "react";
import NavBar from "./NavBar";
import SubHeader from "./SubHeader";

const Header = () => {
  const style = {
    background: "url(/images/defaultBcg.jpeg) 50% / cover no-repeat",
  };
  return (
    <header>
      <NavBar />
      <SubHeader
        title="luxurious rooms"
        btnTitle="our rooms"
        clasS="main-header"
        subTitle="deluxe rooms starting at"
        priceTitle="$299"
        style={style}
        size="w-75 p-5"
        to="/rooms"
      />
    </header>
  );
};

export default Header;
