import React, { Component } from "react";
import "./HierarchyView.css";

class HierarchyView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.data.map(d => {
                        return(
                            <div>
                                <li>{d.name}</li>
                                <li>{d.surname}</li>
                                { d.specialData ? <HierarchyView data = {d.specialData} /> : null }
                            </div>
                        )
                    })
                }
            </ul>
        )
    }
}

export default HierarchyView;