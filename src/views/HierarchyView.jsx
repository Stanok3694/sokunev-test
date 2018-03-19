import React, { Component } from "react";
import { PersonalInfo } from "../components/personalInfo";

class HierarchyView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ol>
                {
                    this.props.data.map(d => {
                        return(
                            <div>
                                <li>
                                    <PersonalInfo 
                                        name = {d.name}
                                        surname = {d.surname}
                                    />
                                </li>
                                { d.specialData ? <HierarchyView data = {d.specialData} /> : null }
                            </div>
                        )
                    })
                }
            </ol>
        )
    }
}

export default HierarchyView;