import React from "react";

const ServiceSection = () => {
  return (
    <section className="services text-center p-5">
      <div className="services-title">
        <h4 className="fs-1 text-capitalize">services</h4>
        <div className="mx-auto mb-4"></div>
      </div>
      <div className="services-items lh-lg">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="fas fa-cocktail fs-1 mb-4"></i>
                <h5 className="card-title fw-bolder mb-3">Free Juice</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="fas fa-hiking fs-1 mb-4"></i>
                <h5 className="card-title fw-bolder mb-3">Endless Hiking</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="fas fa-shuttle-van fs-1 mb-4"></i>
                <h5 className="card-title fw-bolder mb-3">Free Shuttle</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <i className="fas fa-mug-hot fs-1 mb-4"></i>
                <h5 className="card-title fw-bolder mb-3">Strongest Tea</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
