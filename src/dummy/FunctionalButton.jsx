/* eslint-env browser */
import React from 'react';

const FunctionalButton = ({id, text, children}) => {
    let onClick = function(e) {
        console.log("functional-button " + e);
    }
    return <div className="button-place">
      <button id={id} onClick={onClick}>{children}<p>{text}</p></button>
    </div> 
}

FunctionalButton.propTypes = {
    id: React.PropTypes.number,
    text: React.PropTypes.string,
    children: React.PropTypes.object
}

export default FunctionalButton