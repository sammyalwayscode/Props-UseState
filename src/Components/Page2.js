import React from "react";

const Page2 = ({ nest, setNest, movePage }) => {
  return (
    <div>
      {nest ? (
        <div>
          <h1>This is Page Two</h1>
          <button onClick={movePage}>Go Back</button>
        </div>
      ) : null}
    </div>
  );
};

export default Page2;
