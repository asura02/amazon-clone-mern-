import React from "react";
import { Link } from "react-router-dom";
import "./adsone.css";

const AdsOne = ({ heading, img, link }) => {
  return (
    <div className="AdvertisementOne__main">
      <div className="AdvertisementOne__header">{heading}</div>
      <div className="AdvertisementOne__body">
        <Link to={`/${link}`}>
          {" "}
          <img src={img} width="300px" />
        </Link>
      </div>
      <div className="AdvertisementOne__footer">See more</div>
    </div>
  );
};

export default AdsOne;
