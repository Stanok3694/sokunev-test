const FindElementById = (id, treeElements, callback) => {	
	treeElements.forEach(element => {
        // console.log(element);
        
        if (element.id === id) {
            // console.log(callback);
            return callback(element);
        }

        if (element.subchilds) {
            // console.log('go recursive');
            FindElementById(id, element.subchilds, callback);
        }
    });
}

export default FindElementById;