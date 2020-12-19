import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h2> OOPS!! </h2>
        <strong>
          <p>The page you are requeted is not available at the moment .</p>
          <p>Click here to go back to main page </p>
        </strong>
        <p>
          <Link to="/">
            <button className="btn btn-primary">Home</button>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Error;
