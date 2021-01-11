import React from "react";
import { Link } from "react-router-dom";

export default function Bomb({ username }) {
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
