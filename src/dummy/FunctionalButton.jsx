/* eslint-env browser */
import React from 'react';

const FunctionalButton = ({text}) => {
    let onClick = function(e) {
        console.log("functional-button " + e);
    }
    return <div className="button-place"><button onClick={onClick}>{text}</button></div> 
}

FunctionalButton.propTypes = {
    text: React.PropTypes.string
}

export default FunctionalButton