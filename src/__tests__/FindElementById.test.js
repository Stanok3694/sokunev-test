import { FindElementById } from "../services";

const mockedArray = [
    {
        id: 1,
        name: 'aa'
    },
    {
        id: 2,
        name: 'bb',
        subchilds: [
            {
                id: 3,
                name: 'cc'
            },
            {
                id: 4,
                name: 'dd'
            },
        ]
    },
    {
        id: 5,
        name: 'ff',
    }
];

const foundElementInFlattenArray = {
    id: 5,
    name: 'ff'
};

const foundElementInNestedArray = {
    id: 3,
    name: 'cc'
};

describe('Find element by id: ', () => {
    it.skip('should return element in flatten array', () => {
        const result = FindElementById(5, mockedArray);
        expect(result).toEqual(foundElementInFlattenArray);
    });

    it.skip('should return element in nested array', () => {
        const result = FindElementById(3, mockedArray);
        expect(result).toEqual(foundElementInNestedArray);
    });

    it.skip('should not return element', () => {
        const result = FindElementById(6, mockedArray);
        expect(result).toEqual('no element');
    });
});