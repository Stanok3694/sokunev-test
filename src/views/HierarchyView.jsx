import React from "react";
import { Card } from "../components/PersonalCard";

const HierarchyView = (props) => (
    <ol>
        {
            props.data.map(d => {
                if (!d.deleted) {
                    return (
                        <div key={d.id}>
                            <li>
                                <Card
                                    id={d.id}
                                    name={d.name}
                                    surname={d.surname}
                                    handleAddClick={props.addClick}
                                    handleEditClick={props.editClick}
                                    handleDeleteClick={props.deleteClick}
                                />
                            </li>
                            {
                                d.subchilds
                                    ? (
                                        <HierarchyView 
                                            data={d.subchilds}
                                            addClick={props.addClick}
                                            editClick={props.editClick}
                                            deleteClick={props.deleteClick}
                                        />)
                                    : null
                            }
                        </div>
                    )
                } else {
                    return null;
                }
            })
        }
    </ol>
);

export default HierarchyView;