import React from "react";

const Buttons = ({onIncrement, onDecrement}) => {
    return <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
}

Buttons.propTypes = {
    onIncrement: React.PropTypes.func,
    onDecrement: React.PropTypes.func
}

export default Buttons;