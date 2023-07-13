import React from 'react';

function Question(props) {

return  (

    <>
        <div >
            <div style={{margin: 20}}>
                    {props.myProp}
            </div>
        </div>
    </>

    );
}
export default Question;