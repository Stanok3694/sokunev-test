const FindElementById = (id, treeElements) => {
    let result = 'no element';

    for (let i = 0; i < treeElements.length; i++) {
        if (treeElements[i].id === id) {
            result = treeElements[i];
        } else if (treeElements[i].subchilds) {
            result = FindElementById(id, treeElements[i].subchilds);
        }
    }

    return result;
}

export default FindElementById;