import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeavyComponent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light p-4 border rounded shadow-sm">
      <h3 className="text-primary">This is a Lazy Loaded Component!</h3>
    </div>
  );
};

export default HeavyComponent;