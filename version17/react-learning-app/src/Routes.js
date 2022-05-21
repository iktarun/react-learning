import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Timer from "./pages/Timer";
import StockContainer from "./pages/StockContainer";
import ContextAPIContainer from "./pages/ContextAPIs/ContextAPIContainer";
import UseStateHook from "./pages/Hooks/UseState";
import UseMemo from "./pages/Hooks/UseMemo";
import UseCallback from "./pages/Hooks/UseCallback";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/timer", component: Timer },
  { path: "/stock", component: StockContainer },
  { path: "/context-api", component: ContextAPIContainer },
  { path: "/use-state-hook", component: UseStateHook },
  { path: "/use-memo-hook", component: UseMemo },
  { path: "/use-callback-hook", component: UseCallback },
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
