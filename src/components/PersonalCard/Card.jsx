import React from "react";
import "./Card.style.css";

const Card = (props) => {
    return (
        <div className="card">
            <p>{props.name}</p>
            <p>{props.surname}</p>
        </div>
    );
};

export default Card;