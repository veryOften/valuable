import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

function ErrorFallback1({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function ErrorFallback2({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Bomb({ username }) {
  if (username === "bomb") {
    throw new Error("💥 CABOOM 💥");
  }
  return (
    <div>
      {`Hi ${username}`}
      <br />
      <Link to="/greeting">greeting</Link>
      <br />
      <Link to="/farewell">farewell</Link>
    </div>
  );
}

function Main() {
  const [username, setUsername] = React.useState("");
  const usernameRef = React.useRef(null);
  return (
    <div>
      <label>
        {`Username (don't type "bomb"): `}
        <input
          placeholder={`type "bomb"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>
      <div>
        <ErrorBoundary
          FallbackComponent={ErrorFallback2}
          onReset={() => {
            setUsername("");
            usernameRef.current.focus();
          }}
          resetKeys={[username]}
        >
          <Bomb username={username} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

function Greeting({ subject }) {
  return (
    <div>
      Hello {subject.toUpperCase()}
      <br />
      <Link to="/">main</Link>
      <br />
      <Link to="/farewell">farewell</Link>
    </div>
  );
}
function Farewell({ subject }) {
  return (
    <div>
      Goodbye {"s".toUpperCase()}
      <br />
      <Link to="/">main</Link>
      <br />
      <Link to="/greeting">greeting</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ErrorBoundary FallbackComponent={ErrorFallback1}>
          <Route exact path="/" component={Main} />
          <Route exact path="/greeting" component={Greeting} />
          <Route exact path="/farewell" component={Farewell} />
        </ErrorBoundary>
      </Switch>
    </BrowserRouter>
  );
}
