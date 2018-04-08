import uuidv1 from "uuid/v1";

const MockData = [
    {
        id: uuidv1(),
        name: "name-1",
        surname: "surname-1",
        subchilds: [
            {
                id: uuidv1(),
                name: "name-2",
                surname: "surname-2",
                subchilds: [
                    {
                        id: uuidv1(),
                        name: "name-3",
                        surname: "surname-3",
                    }
                ]
            },
            {
                id: uuidv1(),
                name: "name-4",
                surname: "surname-4",
            },
        ]
    },
    {
        id: uuidv1(),
        name: "name-5",
        surname: "surname-5"
    },
    {
        id: uuidv1(),
        name: "name-6",
        surname: "surname-6",
    }
];

export default MockData;