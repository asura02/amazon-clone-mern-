import "./App.css";
import Header from "./component/layout/Header/Header";
import WebFont from "webfontloader";
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrder from "./component/Order/MyOrder";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UserList";
import UpdateUser from "./component/Admin/UpdateUser";
import Navbar from "./component/layout/Header/Navbar";
import Navbarn from "./component/layout/Header/Navbarn";
import MainPage from "./component/Home/MainPage";

import ProtectedRouteAdmin from "./component/ProtectedRouteAdmin";
import OrderDetails from "./component/Order/OrderDetails";
import Notfound from "./component/layout/Notfound";
import VariableWidth from "./component/Home/Carsouel/VariableWidth";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    console.log("hello");
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>
      <Router>
        {/* <Header /> */}

        {isAuthenticated ? <Navbar user={user} /> : <Navbarn />}

        {/* {isAuthenticated && <UserOptions user={user} />} */}

        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}

          <Route exact path="/sli" element={<VariableWidth />} />

          <Route exact path="/" element={<MainPage />} />
          {/* <Route exact path="/p" element={<ProtectedRouteAdmin />} /> */}
          {/* <Route exact path="/" element={<MainPage />} /> */}
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route exact path="/search" element={<Search />} />
          {/* ----------------------------------Protected Routes are Here-------------------------------- */}

          <Route element={<ProtectedRoute />}>
            <Route exact path="/account" element={<Profile />} />
            <Route exact path="/me/update" element={<UpdateProfile />} />
            <Route exact path="/password/update" element={<UpdatePassword />} />
            <Route exact path="/login/shipping" element={<Shipping />} />
            <Route exact path="/order/confirm" element={<ConfirmOrder />} />

            {stripeApiKey && (
              <Route
                exact
                path="/process/payment"
                element={
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                  </Elements>
                }
              />
            )}
            <Route exact path="/success" element={<OrderSuccess />} />
            <Route exact path="/orders" element={<MyOrder />} />
            {/* <Route exact path="/admin/dashboard" element={<Dashboard />} />
            <Route exact path="/admin/products" element={<ProductList />} />
            <Route exact path="/admin/product" element={<NewProduct />} />
            <Route
              exact
              path="/admin/product/:id"
              element={<UpdateProduct />}
            />
            <Route exact path="/admin/orders" element={<OrderList />} />
            <Route exact path="/admin/orders/:id" element={<ProcessOrder />} />
            <Route exact path="/admin/users" element={<UsersList />} />
            <Route exact path="/admin/user/:id" element={<UpdateUser />} /> */}
          </Route>
          {/* ----------------------------------Protected Routes Ends-------------------------------- */}
          {/* protected routes for admin
           */}

          <Route element={<ProtectedRouteAdmin />}>
            <Route exact path="/admin/dashboard" element={<Dashboard />} />
            <Route exact path="/admin/products" element={<ProductList />} />
            <Route exact path="/admin/product" element={<NewProduct />} />
            <Route
              exact
              path="/admin/product/:id"
              element={<UpdateProduct />}
            />
            <Route exact path="/admin/orders" element={<OrderList />} />
            <Route exact path="/admin/order/:id" element={<OrderDetails />} />
            <Route exact path="/admin/orders/:id" element={<ProcessOrder />} />
            <Route exact path="/admin/users" element={<UsersList />} />
            <Route exact path="/admin/user/:id" element={<UpdateUser />} />
          </Route>

          {/* end---------------------------- */}
          <Route exact path="/password/forgot" element={<ForgotPassword />} />
          <Route
            exact
            path="/password/reset/:token"
            element={<ResetPassword />}
          />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/login" element={<LoginSignUp />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
