import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { HiLibrary } from "react-icons/hi";
import logg from "../Img/loog.png";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logg} />
        <NavHold>
          <Nav>
            <AiFillHome />
            <span>Home</span>
          </Nav>
          <Nav>
            <HiLibrary />
            <span>Library</span>
          </Nav>
          <Nav>
            <GrTechnology />
            <span>Techdegree</span>
          </Nav>
          <Button>Sign Up</Button>
        </NavHold>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img``;
const NavHold = styled.div`
  display: flex;
`;
const Nav = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
  color: #2a5d85;
  cursor: pointer;

  span {
    margin-left: 5px;
  }

  :hover {
    color: #40484a;
  }
`;

const Button = styled.div`
  height: 30px;
  width: 80px;
  background-color: #0098b1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background-color: #004652;
  }
`;
