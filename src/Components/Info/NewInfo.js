import React, { useState } from "react";

const NewInfo = ({ change, setChange, applyChange }) => {
  return (
    <div>
      {change ? (
        <div>
          <h1>Drink water everyday</h1>
          <h3>And Mind your Business</h3>
          <button onClick={applyChange}>Go Back</button>
        </div>
      ) : null}
    </div>
  );
};

export default NewInfo;
