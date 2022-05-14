import React, { useEffect, useState, Fragment } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  const [go, setgo] = useState("");

  const onChange = (e) => {
    setgo(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    switch (go) {
      case "Products":
        return navigate("/products");
      default:
        return "";
    }
  }, [go]);

  return (
    <div>
      <div className="navbar_component">
        <Link to="/">
          <div className="navbar_logo"></div>
        </Link>
        <div className="navbar_locator">
          <div className="navbar_locatorImage"></div>
          <div className="navbar_location">Mumbai</div>
        </div>
        <div className="navbar_search">
          <div>
            <select value={go} onChange={onChange} className="select_option">
              <option value="All">All</option>
              <option value="App&Games">App&Games</option>
              <option value="Baby">Baby</option>
              <option value="Beauty">Beauty</option>
              <option value="Car">Car</option>
              <option value="Products">Products</option>
              <option value="Electronics">Electronics</option>
              <option value="Collectables">Collectables</option>
              <option value="Deals">Deals</option>
            </select>
          </div>
          <div>
            <form onSubmit={searchSubmitHandler}>
              <input
                type="text"
                className="navbar_searchBar"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <div style={{ display: "inline", position: "absolute" }}>
                <input className="inputsubmitdiv" type="submit"></input>
                <div
                  style={{
                    position: "relative",
                    top: "-46px",
                    margin: "12px 9px ",
                  }}
                  className="search_icon"
                ></div>
              </div>
            </form>
          </div>
        </div>
        <div className="navbar_last navbar_text">
          <div style={{ padding: "15px 0" }}>
            <img
              style={{ height: "20px", borderRadius: "1px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="navbar_signin">
            <div style={{ fontSize: "14px" }}>
              Hello,{" "}
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/login"
              >
                SignIn
              </Link>
            </div>

            <div style={{ fontWeight: "bold" }}>Account & Lists</div>
          </div>
          <div className="navbar_return">
            <div style={{ fontSize: "14px" }}>Register </div>
            <div style={{ fontWeight: "bold" }}>
              {" "}
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/login"
              >
                & SignUp
              </Link>
            </div>
          </div>

          <div className="navbar_return">
            <div style={{ fontSize: "14px" }}>Returns</div>
            <div style={{ fontWeight: "bold" }}>& Order</div>
          </div>
          <div className="navbar_cart">
            <div className="cart_img"></div>
            <div className="cart_items">0</div>
            <div className="navbar_cart_text">Cart</div>
          </div>
        </div>
      </div>
      <div className="navbar_footer">
        <div className="navbar_footer_text">Best Seller </div>
        <div className="navbar_footer_text">Mobiles </div>
        <div className="navbar_footer_text">Customer Service </div>
        <div className="navbar_footer_text">Today's Deal </div>
        <div className="navbar_footer_text">Electronics </div>
        <div className="navbar_footer_text">Fashion </div>
        <div className="navbar_footer_text">Prime </div>
        <div className="navbar_footer_text">Books </div>
        <div className="navbar_footer_text">New Releases </div>
        <div className="navbar_footer_text">Home & Kitchen </div>
        <div className="navbar_footer_text">Amazon Pay </div>
        <div className="navbar_footer_text">Computers </div>
        <div className="lastlast"></div>
      </div>
    </div>
  );
};

export default Navbar;
