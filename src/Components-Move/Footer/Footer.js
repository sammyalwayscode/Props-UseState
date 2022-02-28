import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter, BsDribbble } from "react-icons/bs";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FootOne>
          <FootLogo>Codelab</FootLogo>
          <FootMotto>
            Best cources up for sales at a very good price, 30% discount for
            early birds
          </FootMotto>
          <FootSocial>
            <div>
              <BsFacebook />
            </div>
            <div>
              <BsInstagram />
            </div>
            <div>
              <BsTwitter />
            </div>
            <div>
              <BsDribbble />
            </div>
          </FootSocial>
        </FootOne>
        <FootTwo>
          <FootTwoHold>
            <FootTitle>Home</FootTitle>
            <FootNav>Abou</FootNav>
            <FootNav>Blog</FootNav>
            <FootNav>Career</FootNav>
            <FootNav>Community</FootNav>
            <FootNav>Stories</FootNav>
            <FootNav>Contact</FootNav>
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>Techdegree</FootTitle>
            <FootNav>Web Development</FootNav>
            <FootNav> Frontend developnment </FootNav>
            <FootNav> FullStack Javascript </FootNav>
            <FootNav>Python Developnment</FootNav>
            <FootNav>Data Analysis</FootNav>
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>Tracks</FootTitle>
            <FootNav>Learn From begining</FootNav>
            <FootNav>Beginning Python</FootNav>
            <FootNav>Beginning SQL</FootNav>
            <FootNav>Beginning Java</FootNav>
            <FootNav>see more</FootNav>
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>Courses</FootTitle>
            <FootNav>Javascript Basics</FootNav>
            <FootNav>Intro to HTML/CSS</FootNav>
            <FootNav>Python Basics</FootNav>
            <FootNav>Css layout</FootNav>
            <FootNav>see more</FootNav>
          </FootTwoHold>
        </FootTwo>
      </Wrapper>
      <Developer>@codelab 2021</Developer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 525px;
  background-color: #f6f9fa;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 50px 0;
  color: #3e474f;
`;
const FootOne = styled.div`
  width: 250px;
  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
  }
`;
const FootLogo = styled.div`
  font-weight: 700;
  margin-bottom: 20px;
`;
const FootMotto = styled.div`
  font-size: 13px;
  margin-bottom: 25px;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const FootSocial = styled.div`
  display: flex;
  color: #707070;
  font-size: 20px;
  div {
    margin-right: 20px;
  }
`;
const FootTwo = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (max-width: 610px) {
    width: 310px;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }
`;
const FootTwoHold = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: brown; */
    margin-bottom: 9px;
  }
`;
const FootTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  padding-bottom: 8px;
`;
const FootNav = styled.div`
  font-size: 12px;
  margin: 10px 0;

  @media screen and (max-width: 500px) {
    margin: 5px 0;
  }
`;

const Developer = styled.div`
  font-weight: 500;
  font-size: 10px;
  margin-bottom: 10px;
  color: #77838f;
`;
