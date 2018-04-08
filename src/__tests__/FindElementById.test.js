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
    it('should return element in flatten array', () => {
        let result = null;
        
        FindElementById(5, mockedArray, (target) => {
            result = target;    
        });

        expect(result).toEqual(foundElementInFlattenArray);
    });

    it('should return element in nested array', () => {
        let result = null;
        
        FindElementById(3, mockedArray, (target) => {
            result = target;    
        });

        expect(result).toEqual(foundElementInNestedArray);
    });

    it('should not return element', () => {
        let result = null;
        
        FindElementById(6, mockedArray, (target) => {
            result = target;    
        });

        expect(result).toEqual(null);
    });
});