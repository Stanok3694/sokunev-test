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
        for (let i = 0; i < treeElements.length; i++) {
            if(treeElements[i].id === id) {
                treeElements.splice(i, 1);
                break;
            } else if (treeElements[i].subchilds) {
                this.DeleteElementById(id, treeElements[i].subchilds);
            }
        }
        
        return treeElements;
    }
}

const EditTreeService = new EditTree();
export default EditTreeService;