import React from "react";
import { Link } from "react-router-dom";

export default function Farewell({ subject }) {
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
