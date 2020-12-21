import React from "react";
import { Link } from "react-router-dom";

const SubHeader = ({
  title,
  btnTitle,
  clasS,
  subTitle,
  priceTitle,
  style,
  size,
  to,
}) => {
  return (
    <section
      className={`${clasS} d-flex justify-content-center align-items-center text-center`}
      style={style}
    >
      <div className={`inside-main-header ${size}`}>
        <h1 className="fs-1 text-capitalize fw-bolder">{title}</h1>
        <div></div>
        {subTitle ? (
          <p className="fs-3 text-capitalize mb-5">
            {subTitle} <span className="fw-bolder">{priceTitle}</span>
          </p>
        ) : null}
        <Link className="btn btn-outline-light  px-4 text-uppercase" to={to}>
          {btnTitle}
        </Link>
      </div>
    </section>
  );
};

export default SubHeader;
