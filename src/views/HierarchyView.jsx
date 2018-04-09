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
                                handleAddClick={props.addClick}
                                handleEditClick={props.editClick}
                            />
                        </li>
                        {
                            d.subchilds
                                ? (
                                    <HierarchyView 
                                        data={d.subchilds}
                                        addClick={props.addClick}
                                        editClick={props.editClick}
                                    />)
                                : null
                        }
                    </div>
                )
            })
        }
    </ol>
);

export default HierarchyView;