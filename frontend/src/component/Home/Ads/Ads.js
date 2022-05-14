import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import "./ads.css";

const Ads = () => {
  const navigate = useNavigate();

  const sendTo = () => {
    console.log("hello");
    navigate("/login");
  };

  return (
    <div>
      <div className="ads_main">
        <div className="ads_text">Sign in for your best </div>
        <div className="ads_text">experience</div>
        <div className="ads_button text-center">
          <button className="button_text" onClick={sendTo}>
            SignIn securely
          </button>
        </div>
      </div>
      <div className="second_ads">
        <img
          src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Ads;
