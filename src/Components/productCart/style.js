import styled from "styled-components";

export const Div = styled.div`
  width: 85%;
  max-width: 250px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 15px;
  box-shadow: 10px 9px 14px -5px rgba(0, 0, 0, 0.75);
  border: solid #dedede;
  border-radius: 5px;
  background-color: #fff;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background-color: #E71A3B;
`;

export const Img = styled.img`
  width: 90px;
`;

export const P = styled.p`
  width: 90%;
  font-size: 11px;
  color: grey;
  text-align: center;
`
export const Title = styled.h4`
  width: 90%;
  font-size: 13px;
  text-align: center;
  height: 32px;
`