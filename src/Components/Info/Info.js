import { useState } from "react";
import NewInfo from "./NewInfo";

const Info = () => {
  const [change, setChange] = useState(false);

  const applyChange = () => {
    setChange(!change);
    console.log(change);
  };
  return (
    <div>
      {change ? null : (
        <div>
          <h1>This is the Info</h1>
          <h3>Get Ready For More</h3>
          <button onClick={applyChange}>View More</button>
        </div>
      )}
      <NewInfo
        change={change}
        setChange={setChange}
        applyChange={applyChange}
      />
    </div>
  );
};

export default Info;
