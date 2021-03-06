import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./publicPages/Home";
import Shop from "./publicPages/Shop";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Signin from "./forms/Signin";
import Register from "./forms/Register";
import Profile from "./userContent/Profile";
import { useSelector } from "react-redux";
import Payment from "./userContent/Payment";
import PlaceOrder from "./userContent/PlaceOrder";

import ProductManagement from "./adminContent/ProductManagement";
import AdminDashBoard from "./adminContent/AdminDashBoard";
import OrderManagement from "./adminContent/OrderManagement";
import AddProduct from "./adminContent/AddProduct";
import Shipping from "./userContent/Shipping";
import OrderConfirmation from "./userContent/OrderConfirmation";
import "react-app-polyfill/stable";

const App = () => {
  const auth = useSelector((state) => state.auth);
  const { isSignedIn } = auth;

  return (
    <Router>
      <div>
        <Navigation />
        <div>
          <Switch>
            <Route
              path="/admin/product-management"
              component={ProductManagement}
            />
            <Route path="/admin/order-management" component={OrderManagement} />
            <Route path="/admin/add-product" component={AddProduct} />
            <Route path="/admin" component={AdminDashBoard} />
            <Route path="/order-confirmation" component={OrderConfirmation} />
            <Route path="/payment" component={Payment} />
            <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/cart/:id?" component={ShoppingCart} />
            <Route exact path="/shop" component={Shop} />
            {!isSignedIn ? (
              <Route exact path="/signin" component={Signin} />
            ) : (
              <Route exact path="/user/profile" component={Profile} />
            )}

            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
