import React, { Component } from "react";
import "./FirstLevel.css";

class FirstLevel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            data: [
                {
                    name: "blabla",
                    surname: "fafa",
                    specialData: [
                        {
                            speciality: "zaza",
                        },
                        {
                            specialty: "susu",
                            subspecialty: [
                                {
                                    subspecialtyName: "chacha",
                                },
                                {
                                    subspecialtyName: "fofo",
                                }
                            ]
                        },
                    ]
                },
                {
                    name: "blabla",
                    surname: "fafa"
                },
                {
                    name: "blabla",
                    surname: "fafa",
                    specialData: [
                        {
                            speciality: "zaza",
                        },
                        {
                            speciality: "susu",
                        },
                    ]
                }
            ]
        }
    }

    // SO: can refactor this - should be more functional and don't depend on data structure

    checkSpecDataForSubspecData = (data) => {
        const hasSubSpecData = data.subspecialty && data.subspecialty.length !== 0;
        
        return (hasSubSpecData) 
            ? (
                <div>
                    {
                        data.subspecialty.map(subspec => (
                            <div className = "innerInnerCard">
                                <p>{subspec.subspecialtyName}</p>
                            </div>
                        ))
                    }
                </div>
            )
            : null; 
    }

    checkDataForSpecData = (data) => {
        const hasSpecData = data.specialData && data.specialData.length !== 0;
        
        return (hasSpecData) 
            ? (
                <div>
                    {
                        data.specialData.map(spec => (
                            <div className = "innerCard">
                                <p>{spec.speciality}</p>
                                { this.checkSpecDataForSubspecData(spec) }
                            </div>
                        ))
                    }
                </div>
            )
            : null; 
    }

    render() {
        return (
            <div>
                <h2>first level</h2>
                {
                    this.state.data.map(d => (
                        <div className = "card">
                            <p>{d.name}</p>
                            <p>{d.surname}</p>
                            { this.checkDataForSpecData(d) }
                        </div>
                    ))
                }
            </div>
        ); 
    }
}

export default FirstLevel;