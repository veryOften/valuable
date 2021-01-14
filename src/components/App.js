import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch } from "react-router-dom";
import Farewell from "../page/Farewell";
import Greeting from "../page/Greeting";
import Main from "../page/Main";
import LazyInitialization from "../page/LazyInitialization";
import { ErrorFallback1 } from "./Error";

export default function App() {
  return (
    <Switch>
      <ErrorBoundary FallbackComponent={ErrorFallback1}>
        <Route exact path="/" component={Main} />
        <Route exact path="/greeting" component={Greeting} />
        <Route exact path="/farewell" component={Farewell} />
        <Route
          exact
          path="/lazyInitialization"
          component={LazyInitialization}
        />
      </ErrorBoundary>
    </Switch>
  );
}
