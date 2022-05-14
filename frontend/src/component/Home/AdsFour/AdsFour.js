import React from "react";
import "./adsfour.css";
import { Link } from "react-router-dom";

const AdsFour = ({
  heading,
  subh,
  subhh,
  subhhh,
  subhhhh,
  img,
  imgg,
  imggg,
  imgggg,
  link,
  linkk,
  linkkk,
  linkkkk,
}) => {
  return (
    <div className="AdvertisementOne__main">
      <div className="AdvertisementOne__header">{heading}</div>
      <div className="AdvertisementOne__body">
        <div className="ad_fourImagediv" style={{ color: "black" }}>
          {" "}
          <a href={link}>
            {" "}
            <img src={img} className="ad_fourImage" />
          </a>
          {subh}
        </div>
        <div className="ad_fourImagediv" style={{ color: "black" }}>
          {" "}
          <a href={linkk}>
            <img src={imgg} className="ad_fourImage" />
          </a>
          {subhh}
        </div>
        <div className="ad_fourImagediv" style={{ color: "black" }}>
          {" "}
          <a href={linkkk}>
            <img src={imggg} className="ad_fourImage" />
          </a>
          {subhhh}
        </div>
        <div className="ad_fourImagediv" style={{ color: "black" }}>
          {" "}
          <a href={linkkkk}>
            {" "}
            <img src={imgggg} className="ad_fourImage" />
          </a>
          {subhhhh}
        </div>
      </div>
      <div className="AdvertisementOne__footer">See more</div>
    </div>
  );
};

export default AdsFour;
