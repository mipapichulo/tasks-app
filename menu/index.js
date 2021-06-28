const inquirer = require('inquirer');
const { questions } = require('../config/inquirer');
const {
	createTask, listTask,
	listCompletedTask, listPendingTask,
	completeTask, deleteTask
} = require('./options'); 
require('colors');


const setTitle = (title) => {
	console.clear();
	console.log('=========================='.green
	);
	console.log(`     ${title}`
	);
	console.log('==========================\n'.green
	);
}

const getOption = async () => {
	const { option }= await inquirer.prompt(questions.main);
	return option;
}

const showMenu = async () => {
	let opt;
	do{
		setTitle("Select a option");
		opt = await getOption();
		await showOption(opt);
	}while(opt !== '0')
}

const pause = async () => {
	console.log('\n');
	await inquirer.prompt(questions.pause);
}

const showOption = async (opt) => {
	switch(opt){
		case '1':
			await createTask();
			await pause();
			break;
		case '2':
			listTask();
			await pause();
			break;
		case '3':
			listCompletedTask();
			await pause();
			break;
		case '4':
			listPendingTask();
			await pause();
			break;
		case '5':
			await completeTask();
			await pause();
			break;
		case '6':
			await deleteTask();
			await pause();
			break;
	}
}

module.exports = {
	showMenu,
	pause
}
