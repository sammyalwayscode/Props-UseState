import React from "react";
import styled from "styled-components";
import IconCard from "../Img/icon-supervisor.svg";

const Card = (props) => {
  return (
    <Container>
      <Wrapper>
        <Title> {props.TitleName} </Title>
        <Content> {props.Content} </Content>
        <Icon>
          <img src={props.IconImg} alt={props.ALTstatement} />
        </Icon>
      </Wrapper>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  height: 230px;
  width: 300px;
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 8px;
  border-top: solid green 2px;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 85%;
  /* background-color: blanchedalmond; */
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Content = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #aaa;
  margin-bottom: 30px;
`;
const Icon = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: flex-end;
  img {
    width: 50px;
  }
`;
