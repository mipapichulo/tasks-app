require('colors');

const questions = {
	main : [
		{
			type : 'list',
			name : 'option',
			message : 'What do you wanna do?',
			choices : [
				{
					value : '1',
					name : `${'1.'.green} Create a task`,
				},
				{
					value : '2',
					name : `${'2.'.green} List task(s)`,
				},
				{
					value : '3',
					name : `${'3.'.green} List completed task(s)`,
				},
				{
					value : '4',
					name : `${'4.'.green} List pending task(s)`,
				},
				{
					value : '5',
					name : `${'5.'.green} Complete task(s)`,
				},
				{
					value : '6',
					name : `${'6.'.green} Delete task(s)`,
				},
				{
					value : '0',
					name : `${'0.'.green} Exit`,
				}
			]
		}
	],
	pause : [
		{
			type : 'input',
			name : 'pause',
			message : `Press ${'ENTER'.green} to continue`,
		}
	],
	createTask : [
		{
			type : 'input',
			name : 'description',
			message : 'Descripcion of the task:',
			validate(value){
				if(value.trim().length == 0){
					return 'You must place something';
				}
				return true;
			}
		}
	]
}

const choicesCheckbox = (choices) => {
	return {
				type : 'checkbox',
				name : 'tasksSelected',
				message : 'Selecciona',
				choices
		}
}

const choicesList = (choices) => {
	return {
			type : 'list',
			name : 'toDelete',
			message : 'Select the task you wanna delete',
			choices
	}
}

const confirmInput = () => {
	return {
		type : 'confirm',
		name : 'response',
		message : 'Are you sure to delete?',
		default : false,
	}
}

module.exports = {
	questions,
	choicesCheckbox,	
	choicesList,
	confirmInput
}

