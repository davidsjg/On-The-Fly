import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";


function WrapComp2(props) {

return  (
    <>
    <Wrap>
        <p>{props.buttonText}</p>
    </Wrap>
    </> 
);
}

export default WrapComp2;


const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 250px; */
  margin: 0 30px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 12%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  width: 150px;

  p {
    font-weight: 300;
    padding: 0 20px;
    color: black;
    background-size: contain;
    border-radius: 2px;
  }

  &:hover {
    transform: scale(1.05);
    background-color:  #5cb9ff;
    p {
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
