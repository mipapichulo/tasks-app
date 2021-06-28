const fs = require('fs');
const { join } = require('path');

const dir = join(__dirname, '..', 'database');

const saveData = (data) => {
	fs.writeFileSync(`${dir}/tasks.json`, JSON.stringify(data));
}

const getData = () => {
		const data = fs.readFileSync(`${dir}/tasks.json`).toString();
	if(data === ""){
		return [];
	}
	return JSON.parse(data);
}

module.exports = {
	saveData,
	getData
}
