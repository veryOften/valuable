import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Bomb from "../components/Bomb";
import { ErrorFallback2 } from "../components/Error";

export default function Main() {
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
