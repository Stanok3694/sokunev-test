import React from "react";
import { Card } from "../components/PersonalCard";

const HierarchyView = (props) => (
    <ol>
        {
            props.data.map(d => {
                return (
                    <div key = {d.id}>
                        <li>
                            <Card
                                name={d.name}
                                surname={d.surname}
                            />
                        </li>
                        {d.subchilds ? <HierarchyView data={d.subchilds} /> : null}
                    </div>
                )
            })
        }
    </ol>
);

export default HierarchyView;