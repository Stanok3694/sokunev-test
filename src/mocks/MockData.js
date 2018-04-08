import uuidv1 from "uuid/v1";

const MockData = [
    {
        id: uuidv1(),
        name: "name-1",
        surname: "surname-1",
        subchilds: [
            {
                id: uuidv1(),
                name: "name-1",
                surname: "surname-1",
                subchilds: [
                    {
                        id: uuidv1(),
                        name: "name-1",
                        surname: "surname-1",
                    }
                ]
            },
            {
                id: uuidv1(),
                name: "name-2",
                surname: "surname-2",
            },
        ]
    },
    {
        id: uuidv1(),
        name: "name-2",
        surname: "surname-2"
    },
    {
        id: uuidv1(),
        name: "name-3",
        surname: "surname-3",
    }
];

export default MockData;