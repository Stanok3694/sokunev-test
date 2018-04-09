import React from "react";
import { Card } from "../components/PersonalCard";

const HierarchyView = (props) => (
    <ol>
        {
            props.data.map(d => {
                return (
                    <div key={d.id}>
                        <li>
                            <Card
                                id={d.id}
                                name={d.name}
                                surname={d.surname}
                                handleClick={props.addClick}
                            />
                        </li>
                        {
                            d.subchilds
                                ? <HierarchyView data={d.subchilds} addClick={props.addClick} />
                                : null
                        }
                    </div>
                )
            })
        }
    </ol>
);

export default HierarchyView;