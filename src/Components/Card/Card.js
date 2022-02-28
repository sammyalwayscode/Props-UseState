import { useState } from "react";
import styled from "styled-components";
import Page2 from "../Page2";

const Card = () => {
  const [nest, setNest] = useState(false);

  const movePage = () => {
    setNest(!nest);
    console.log(nest);
  };
  return (
    <Container>
      {nest ? null : <button onClick={movePage}>Click Me</button>}
      <Page2 nest={nest} setNest={setNest} movePage={movePage} />
    </Container>
  );
};

export default Card;

const Container = styled.div``;
