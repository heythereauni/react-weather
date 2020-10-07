import React from 'react';

// function Greeting({name, score}){
function Greeting(props){
    const {name, score} = props;
    return(
        <h2>
            Hello {name}. You score is {score}
        </h2>
    )
}

export default Greeting;