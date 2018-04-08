import { EditTreeService, CreateMockedElement } from "../services";
import { MockData } from "../mocks";

const initialData = MockData;
const newElem = CreateMockedElement(initialData);

describe('EditTree: ', () => {
    it.skip('should add new elem or child', () => {
        console.log(initialData);
    });
    it.skip('should delete elem or child by id', () => {
        //
    });
    it.skip('should edit elem or child by id', () => {
        //
    });
});