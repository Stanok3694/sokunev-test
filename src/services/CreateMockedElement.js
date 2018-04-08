import uuidv1 from "uuid";

const CreateMockedElement = (treeElements) => ({
        id: uuidv1(),
        name: `name-${treeElements.length + 1}`,
        surname: `surname-${treeElements.length + 1}`,
})

export default CreateMockedElement;