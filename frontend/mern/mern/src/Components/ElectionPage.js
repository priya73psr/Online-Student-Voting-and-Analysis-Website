
import React from "react";
import { Link } from "react-router-dom";

export default function ElectionPage() {
  return (
    <div>
      <h2>Details Of The Election</h2>
      <div className="cards">
        <div className="grid-items">
          <h1>Class Representative</h1>
          <p>
            The Class Representative election selects a student to represent peers and ensure effective communication with faculty.
          </p>
          <Link to="/rep">
            <button>Participate</button>
          </Link>
        </div>
        <div className="grid-items">
          <h1>Cultural Representative</h1>
          <p>The Cultural Representative election selects a student to organize events and promote cultural activities on campus.</p>
          <Link to="/sport">
            <button>Participate</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
