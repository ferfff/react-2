//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');

let command = argv._[0];

switch(command) {
	case 'create':
		let task = toDo.create(argv.description);
		console.log(task);
		break;
	case 'list':
		let list = toDo.getList();

		for (let task of list) {
			console.log('===================='.green);
			console.log(task.description);
			console.log('Estado: ', task.complete);
			console.log('===================='.green);
		}
		break;
	case 'update':
		let updated = toDo.update(argv);
		console.log(updated);
		break;
	case 'delete':
		let deleted = toDo.deleteElement(argv);
		console.log(deleted);
		break;
	default:
		console.log('Command doesnt recognized');
}


