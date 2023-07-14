import React from 'react';
import styled from "styled-components";

function ButtonAnswer(props) {

return  (

    <>
        {/* <button onClick={() => props.updateCounter(props.butt)}>  
            {props.answer}
        </button> */}
        <Wrap onClick={() => props.updateCounter(props.butt)} >
            <p>
            {props.answer}
            </p>
        </Wrap>
    </>

    );
}
export default ButtonAnswer;


const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  padding: 20px;
  margin: 0 20px;
  margin-top: 30px;
  background-color:  #5cb9ff;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 12%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


  p {
    font-weight: 500;
    padding: 0 20px;
    color: black;
    background-size: contain;
    border-radius: 2px;
  }

  &:hover {
    transform: scale(1.05);
    p {
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
