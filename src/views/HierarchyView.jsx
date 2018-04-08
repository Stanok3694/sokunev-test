import React from "react";
import { Card } from "../components/PersonalCard";

const HierarchyView = (props) => (
    <ol>
        {
            props.data.map(d => {
                return (
                    <div>
                        <li>
                            <Card
                                name={d.name}
                                surname={d.surname}
                            />
                        </li>
                        {d.specialData ? <HierarchyView data={d.specialData} /> : null}
                    </div>
                )
            })
        }
    </ol>
);

export default HierarchyView;