import React from 'react';

function ButtonAnswer(props) {

return  (

    <>
        <button  onClick={() => props.updateCounter(props.butt)}>  
            {props.answer}
        </button>
    </>

    );
}
export default ButtonAnswer;