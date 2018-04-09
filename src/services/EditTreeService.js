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

    // SO: this method is worst hack i have ever seen. Actually, this is fake delete.
    DeleteElementById(id, treeElements) {
        let targetElement = FindElementById(id, treeElements);
        targetElement.deleted = true;

        return treeElements;
    }
}

const EditTreeService = new EditTree();
export default EditTreeService;