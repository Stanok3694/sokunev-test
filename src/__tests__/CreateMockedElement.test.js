import { CreateMockedElement } from "../services";
import { MockData } from "../mocks";

describe('CreateMockedElement: ', () => {
    const createdElement = CreateMockedElement(MockData);
    const expectedElementName = 'name-4';
    const expectedElementSurname = 'surname-4';

    it('should return mocked element with correct name', () => {
        expect(createdElement.name).toEqual(expectedElementName);
    });

    it('should return mocked element with correct surname', () => {
        expect(createdElement.surname).toEqual(expectedElementSurname);
    });
});