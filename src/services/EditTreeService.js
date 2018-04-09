import { FindElementById } from "./";

class EditTree {
    AddNewElement(treeElements, newElem, id = null) {
        if (id === null) {
            return [...treeElements, newElem];
        }


        const parentElement = FindElementById(id, treeElements);

        parentElement.subchilds
            ? parentElement.subchilds = [...parentElement.subchilds, newElem] 
            : parentElement.subchilds = [newElem];
        
        return treeElements;
    }

    EditElementById(treeElements, values, id) {
        let targetElement = FindElementById(id, treeElements);

        Object.keys(values).forEach(key => targetElement[key] = values[key]);

        return treeElements;
    }

    DeleteElementById(id, treeElements) {
        return 'hello, delete';
    }
}

const EditTreeService = new EditTree();
export default EditTreeService;