import React, { useEffect, useState, Fragment } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../../../actions/userAction";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const { cartItems } = useSelector((state) => state.cart);

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const [go, setgo] = useState("");

  const onChange = (e) => {
    setgo(e.target.value);
  };

  const dispatch = useDispatch();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  useEffect(() => {
    switch (go) {
      case "Products":
        return navigate("/products");
      default:
        return "";
    }
  }, [go]);

  const cartfn = () => {
    navigate("/cart");
  };

  const ordernav = () => {
    navigate("/orders");
  };

  const logoutto = () => {
    dispatch(logout());
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
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
                <select
                  value={go}
                  onChange={onChange}
                  className="select_option"
                >
                  <option value="All">All</option>
                  <option value="App&Games">App&Games</option>
                  <option value="Baby">Baby</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Products">Products</option>
                  <option value="Electronics">Electronics</option>

                  <option value="Collectables">Collectables</option>
                  <option value="Deals">Deals</option>
                </select>
              </div>
              <div style={{ width: "54vw" }}>
                <form onSubmit={searchSubmitHandler} style={{ width: "50vw" }}>
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
                  <span className={isAuthenticated ? "" : "d-none"}>
                    {user.name}
                  </span>
                  <span className={isAuthenticated ? "d-none" : ""}>
                    <Link to="/login">SignIn</Link>
                  </span>
                </div>

                <div style={{ fontWeight: "bold" }}>Account & Lists</div>
              </div>
              <div className="navbar_return">
                <div style={{ fontSize: "14px" }}>
                  {" "}
                  <span className={isAuthenticated ? "" : "d-none"}>
                    <button
                      style={{
                        fontSize: "14px",
                        color: "white",
                        textDecoration: "none",
                        background: "transparent",
                        border: "none",
                      }}
                      onClick={logoutto}
                    >
                      Logout
                    </button>
                  </span>
                </div>
                <div style={{ fontWeight: "bold" }}>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/account"
                  >
                    & Profile
                  </Link>
                </div>
              </div>

              <div className="navbar_return">
                <div style={{ fontSize: "14px" }}>Returns</div>
                <div style={{ fontWeight: "bold" }} onClick={ordernav}>
                  & Order
                </div>
              </div>
              <div onClick={cartfn} className="navbar_cart">
                <div className="cart_img"></div>
                <div className="cart_items">{cartItems.length}</div>
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
      )}
    </Fragment>
  );
};

export default Navbar;
