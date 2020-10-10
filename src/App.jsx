import "./App.css";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import ProductList from "./components/product-list/ProductList";
import AuthenticatedRoute from "./components/authenticatedroute/AuthenticatedRoute";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const onLogin = (loggeInUser) => {
    localStorage.setItem("user", JSON.stringify(loggeInUser));
    setUser(loggeInUser);
  };
  return (
    <div className="App">
      {/* We want a header that will appear in every screen */}
      <Switch>
        <AuthenticatedRoute
          exact
          path="/products"
          user={user}
          component={(props) => <ProductList {...props} user={user} />}
        />
        <Route path="/products" component={ProductList} />{" "}
        {/* We don't wan't non-authenticated users to access the previous route! */}
        <Route
          path="/login"
          render={(props) => <Login {...props} user={user} onLogin={onLogin} />}
        />
        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
