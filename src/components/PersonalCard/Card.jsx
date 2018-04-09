import React from "react";
import "./Card.style.css";

const Card = (props) => {
    return (
        <div className="card">
            <p>{props.name}</p>
            <p>{props.surname}</p>
            <p>{`id = ${props.id}`}</p>
            <button onClick = {props.handleClick.bind(this, props.id)}>
                {'добавить'}
            </button>
        </div>
    );
};

export default Card;