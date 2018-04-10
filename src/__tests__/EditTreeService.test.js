import { EditTreeService, CreateMockedElement, FindElementById } from "../services";
import { 
    MockData, 
    MockWithDeletedElement, MockWithDeletedNestedElement,
    MockWithUpdatedElement, MockWithUpdatedNestedElement,
} from "../mocks";

// SO: collections
const initialData = MockData;
const withDeletedNestedElement = MockWithDeletedNestedElement;
const withDeletedElement = MockWithDeletedElement;
const withUpdatedElement = MockWithUpdatedElement;
const withUpdatedNestedElement = MockWithUpdatedNestedElement;

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
const updatedElem = {
    name: 'its name rly updated',
    surname: 'its surname rly updated',
}

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
        expect(newData).toEqual(withDeletedElement);
    });

    it.skip('should delete nested elem by id', () => {
        const newData = EditTreeService.DeleteElementById(4, initialData);
        expect(newData).toEqual(withDeletedNestedElement);
    });

    it.skip('should edit elem by id', () => {
        const newData = EditTreeService.EditElementById(initialData, updatedElem, 6);
        expect(newData).toEqual(withUpdatedElement);
    });

    it.skip('should edit nested elem by id', () => {
        const newData = EditTreeService.EditElementById(initialData, updatedElem, 3);
        expect(newData).toEqual(withUpdatedNestedElement);
    });
});