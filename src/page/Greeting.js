import React from "react";
import { Link } from "react-router-dom";

export default function Greeting({ subject }) {
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
