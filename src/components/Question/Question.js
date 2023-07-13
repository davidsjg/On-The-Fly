import React from 'react';

function Question(props) {

return  (

    <>
        <div >
            <div className={`${ props.cName }`}>
                    {props.myProp}
            </div>
        </div>
    </>

    );
}
export default Question;