import React from "react";

const CustomActionButton = (props) => (
    <div>
        <button onClick = {props.handleClick}>
            {props.name}
        </button>
    </div>
)

export default CustomActionButton;