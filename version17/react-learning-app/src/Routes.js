import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Timer from "./pages/Timer";
import StockContainer from "./pages/StockContainer";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/timer", component: Timer },
  { path: "/stock", component: StockContainer },
];

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
