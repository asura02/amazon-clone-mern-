import React from "react";
import "../layout/Header/navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      {" "}
      <div className="text-center " style={{ marginTop: "30px" }}>
        {" "}
        <Link to="/">
          <img
            src="https://ik.imagekit.io/amazon98670/imagess/580b57fcd9996e24bc43c518_qPX_P9Qsm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647788959536"
            style={{ width: "150px", height: "30px" }}
            alt=""
            srcset=""
          />
        </Link>
        <div style={{ textAlign: "initial", left: "30vw" }} className="my-5">
          <h3
            style={{
              color: "#E47911",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "23px",
              fontFamily: "verdana",
            }}
          >
            Looking for something?
          </h3>
          <p>
            We're sorry. The Web address you entered is not a functioning page
            on our site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
