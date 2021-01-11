import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import App from "./components/App";
import { ErrorFallback1 } from "./components/Error";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ErrorBoundary FallbackComponent={ErrorFallback1}>
          <Route exact path="/" component={App} />
        </ErrorBoundary>
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
