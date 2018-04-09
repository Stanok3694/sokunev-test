import React from "react";
import { CustomActionButtom } from "../UI";
import "./Card.style.css";

const Card = (props) => {
    return (
        <div className="card">
            <p>{props.name}</p>
            <p>{props.surname}</p>
            
            <CustomActionButtom
                name = 'Добавить'
                handleClick = {props.handleClick.bind(this, props.id)}
            />
        </div>
    );
};

export default Card;