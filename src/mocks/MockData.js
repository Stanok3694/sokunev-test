const uuidv1 = require('uuid/v1');

const MockData = [
    {
        id: uuidv1(),
        name: "blabla",
        surname: "fafa",
        subchilds: [
            {
                id: uuidv1(),
                name: "blabla",
                surname: "fafa",
                subchilds: [
                    {
                        id: uuidv1(),
                        name: "blabla",
                        surname: "fafa",
                    }
                ]
            },
            {
                id: uuidv1(),
                name: "blabla",
                surname: "fafa",
            },
        ]
    },
    {
        id: uuidv1(),
        name: "blabla",
        surname: "fafa"
    },
    {
        id: uuidv1(),
        name: "blabla",
        surname: "fafa",
    }
];

export default MockData;