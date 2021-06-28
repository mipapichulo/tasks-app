const { v4 : uuidv4 } = require('uuid');

class Task {
	constructor(description){
		this.id = uuidv4();
		this.description = description.trim();
		this.completed = null;
	}
}

module.exports = Task;
