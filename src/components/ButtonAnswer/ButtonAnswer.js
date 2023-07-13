import React from 'react';

function ButtonAnswer(props) {

return  (

    <>
        <button className={`${ props.cName }`} onClick={() => props.updateCounter(props.butt)}>  
            {props.answer}
        </button>
    </>

    );
}
export default ButtonAnswer;