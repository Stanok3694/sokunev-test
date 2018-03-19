import React from "react";
import "./PersonalInfo.css";

const PersonalInfo = (props) => {
    return (
        <div className="card">
            <p>{props.name}</p>
            <p>{props.surname}</p>
        </div>
    );
};

export default PersonalInfo;