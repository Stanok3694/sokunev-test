import { EditTreeService, CreateMockedElement, FindElementById } from "../services";
import { MockData, MockWithDeletedElement, MockWithDeletedNestedElement } from "../mocks";

// SO: collections
const initialData = MockData;
const withDeletedNestedElement = MockWithDeletedNestedElement;
const withDeletedElement = MockWithDeletedElement;
// SO: elems
const newElem = {
    id: 6,
    name: "name-3",
    surname: "surname-3",
};
const newNestedElem = {
    id: 4,
    name: "name-2",
    surname: "surname-2",
};

describe('EditTree: ', () => {
    it.skip('should add new elem', () => {
        const newData = EditTreeService.AddNewElement(withDeletedElement, newElem);
        expect(newData).toEqual(initialData);
    });

    it.skip('should add new elem in nested view', () => {
        const newData = EditTreeService.AddNewElement(withDeletedNestedElement, newNestedElem, 1);
        expect(newData).toEqual(initialData);
    });
    
    it.skip('should delete elem by id', () => {
        const newData = EditTreeService.DeleteElementById(6, initialData);
        expect(newData).toEqual(deletedElement);
    });

    it.skip('should delete nested elem by id', () => {
        const newData = EditTreeService.DeleteElementById(4, initialData);
        expect(newData).toEqual(deletedNestedElement);
    });

    it.skip('should edit elem or child by id', () => {
        //
    });
});