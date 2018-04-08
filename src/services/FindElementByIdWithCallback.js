const FindElementByIdWithCallback = (id, treeElements, callback) => {	
	treeElements.forEach(element => {
        
        if (element.id === id) {
            return callback(element);
        }

        if (element.subchilds) {
            FindElementById(id, element.subchilds, callback);
        }
    });
}

export default FindElementByIdWithCallback;