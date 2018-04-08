import uuidv1 from "uuid";

const EditTreeService = () => {
    function AddNewElement (treeElements) {
        return 'hello, add';
    }

    function EditElementById (id, treeElements) {
        return 'hello, edit';
    }

    function DeleteElementById (id, treeElements) {
        return 'hello, delete';
    }

    return Object.freeze({
        AddNewElement: AddNewElement(treeElements),
        EditElementById: EditElementById(id, treeElements),
        DeleteElementById: DeleteElementById(id, treeElements),
    });
}