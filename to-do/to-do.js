const fs = require('fs');

let listToDo = [];

const saveDB = () => {
	let data = JSON.stringify(listToDo);

	fs.writeFile('db/data.json', data, (err) => {
		if(err) throw new Error('Cant save',err);
	} );
}

const getDB = () => {
	try{
		listToDo = require('../db/data.json');
	} catch(e) {
		listToDo = [];
	}
}

const create = (description) => {
	getDB();
	let toDo = {
		description,
		complete: false
	}

	listToDo.push(toDo);

	saveDB();

	return toDo;
}

const getList = () => {
	getDB();
	
	return listToDo;
}

const update = ({description, complete = true}) => {
	getDB();

	let index = listToDo.findIndex(task => task.description === description);

	if( index >= 0) {
		listToDo[index].complete = complete;
		saveDB();
		return true;
	} 

	return false;	
}

const deleteElement = ({description}) => {
	getDB();

	let newArray = listToDo.filter(task => task.description !== description);

	if( listToDo.length !== newArray.length ){
		listToDo = newArray;
		saveDB();
		return true;
	}

	return false;
}

module.exports = {
	create,
	getList,
	update,
	deleteElement
}
