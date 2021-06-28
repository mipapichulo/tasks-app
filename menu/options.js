const inquirer = require('inquirer');
const { questions, choicesCheckbox, choicesList, confirmInput } = require('../config/inquirer');
const Task = require('../models/task');
const ListOfTasks = require('../models/list-tasks');
const { printArray } = require('../utils');
const { saveData } = require('../config/fs');

const listOfTasks = new ListOfTasks();

const createTask = async () => {
	const { description } = await inquirer.prompt(questions.createTask);				
	listOfTasks.addTask(new Task(description));	
	saveData(listOfTasks.tasks);
}

const listTask = () => {
	const tasks = listOfTasks.getListTask();
	console.log('\n');
	printArray(tasks, `You dont have tasks, ${'create'.yellow} one!`);
}

const listCompletedTask = () => {
	const tasks = listOfTasks.getTaskCompleted();
	console.log('\n');
	printArray(tasks, `You dont have tasks completed, ${'complete'.yellow} one!`);
}

const listPendingTask = () => {
	const tasks = listOfTasks.getTaskPending();
	console.log('\n');
	printArray(tasks, `You dont have tasks ${'pendings'.yellow}!`);
}

const completeTask = async () => {
	const tasks = listOfTasks.getTaskTo('complete');
	const toPrompt = [];
	toPrompt.push(choicesCheckbox(tasks));
	const { tasksSelected } = await inquirer.prompt(toPrompt);
	listOfTasks.completeTasks(tasksSelected);	
	saveData(listOfTasks.tasks);
}

const deleteTask = async () => {
	const tasks = listOfTasks.getTaskTo('delete')	
	const toPrompt = [];
	toPrompt.push(choicesList(tasks), confirmInput());
	const { toDelete, response } = await inquirer.prompt(toPrompt);
	if(response){
		listOfTasks.deleteTask(toDelete);
	}
	saveData(listOfTasks.tasks);
}

module.exports = {
	createTask,
	listTask,
	listCompletedTask,
	listPendingTask,
	completeTask,
	deleteTask
}
