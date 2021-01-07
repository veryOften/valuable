import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function Main({ subject }) {
  return (
    <div>
      Main {subject.toUpperCase()}
      <Link to="/farewell">farewell</Link>
      <Link to="/greeting">greeting</Link>
    </div>
  );
}

function Greeting({ subject }) {
  return (
    <div>
      Hello {subject.toUpperCase()}
      <Link to="/">main</Link>
      <Link to="/farewell">farewell</Link>
    </div>
  );
}
function Farewell({ subject }) {
  return (
    <div>
      Goodbye {"s".toUpperCase()}
      <Link to="/">main</Link>
      <Link to="/greeting">greeting</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Route exact path="/" component={Main} />
          <Route exact path="/greeting" component={Greeting} />
          <Route exact path="/farewell" component={Farewell} />
        </ErrorBoundary>
      </Switch>
    </BrowserRouter>
  );
}
