const description = {
	alias: 'd',
	demand: true,
	desc: 'Description'
}

const complete = {
	default: true,
	alias: 'c',
	desc: 'Mark as complete or pending the task'
}

const argv = require('yargs')
	.command('create', 'Create an element to do', {
		description
	})
	.command('update', 'Update one task', {
		description,
		complete
	})
	.command('delete', 'Delete one task', {
		description
	})
	.help()
	.argv;

module.exports = {
	argv
}
