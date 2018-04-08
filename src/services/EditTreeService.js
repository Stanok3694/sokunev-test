import uuidv1 from "uuid";
import { FindElementByIdWithCallback } from "./";

class EditTree {
    AddNewElement (treeElements) {
        return 'hello, add';
    }

    EditElementById (id, treeElements, updatedElem) {
        FindElementByIdWithCallback(id, treeElements, function (target) {
            console.log('target ' + target.name);
            console.log('updatedElem ' + updatedElem.name);
            target.name = updatedElem.name;
            target.surname = updatedElem.surname;
        });

        console.log(treeElements);
    }

    DeleteElementById (id, treeElements) {
        return 'hello, delete';
    }
}

const EditTreeService = new EditTree();
export default EditTreeService;