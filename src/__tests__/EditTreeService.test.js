import { EditTreeService, CreateMockedElement, FindElementById } from "../services";
import { MockData } from "../mocks";

const initialData = MockData;
const newElem = CreateMockedElement(initialData);
console.log(newElem);
describe('EditTree: ', () => {
    it.skip('should add new elem or child', () => {
        console.log(initialData);
    });
    it.skip('should delete elem or child by id', () => {
        //
    });
    it('should edit elem or child by id', () => {
        EditTreeService.EditElementById(1, initialData, newElem);
        console.log(initialData);
        const updatedElem = FindElementById(3, initialData);
        console.log(updatedElem);
        expect(updatedElem).toEqual(newElem);
    });
});