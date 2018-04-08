import uuidv1 from "uuid/v1";

const MockData = [
    {
        id: 1,
        name: "name-1",
        surname: "surname-1",
        subchilds: [
            {
                id: 2,
                name: "name-1",
                surname: "surname-1",
                subchilds: [
                    {
                        id: 3,
                        name: "name-1",
                        surname: "surname-1",
                    }
                ]
            },
            {
                id: 4,
                name: "name-2",
                surname: "surname-2",
            },
        ]
    },
    {
        id: 5,
        name: "name-2",
        surname: "surname-2"
    },
    {
        id: 6,
        name: "name-3",
        surname: "surname-3",
    }
];

export default MockData;