const { getDateNow } = require('../utils');
const { getData } = require('../config/fs');

class ListOfTasks {
	constructor(){
		this.tasks = getData();
	}

	addTask(task){
		this.tasks = [
			...this.tasks,
			task
		]
	}
	getListTask(){
		const arr = [] 
		let count = 1; 
		for(const task of this.tasks){
			const { description, completed } = task
			const culminated = completed ? ':: Completed'.green : ':: Pending'.red;
			arr.push(`${count.toString().green}${'.'.green} ${description} ${culminated}`);
			count += 1;
		}
		return arr;
	}

	getTaskCompleted(){
		const complete = []
		let count = 1;
		for(const task of this.tasks){
			const { description, completed } = task
			if(completed){
				complete.push(`${count.toString().green}${'.'.green} ${description} ${completed.green}`);
				count += 1;
			}
		}
		return complete;
	}

	getTaskPending(){
		const tasks = this.getListTask();
		const pending =  tasks.filter(el => el.includes('Pending'));
		return pending;
	}

	getTaskTo(mode){
		const arr = []
		let count = 1;
		for(const task of this.tasks){
			const { description, completed, id  } = task;
			const name = `${count.toString().green}${'.'.green} ${description}` 
			if(mode === 'complete'){
				const checked = completed ? true : false;
				arr.push({
					name,
					value : id,
					checked
				})
			}else if(mode === 'delete'){
				arr.push({
					name,
					value : id,
				})
			}
			count += 1;
		}
		return arr;
	}
	
	completeTasks(ids){
		if(ids.length == 0) {
			this.tasks.forEach(t => {
					t.completed = null;
			})
			return;
		}
		for(const id of ids){
			const foundIndex = this.tasks.findIndex(task => id === task.id)
			if(!this.tasks[foundIndex].completed){
				this.tasks[foundIndex].completed = getDateNow();
			}
		}
	
		this.tasks.forEach(t => {
			if(!ids.includes(t.id)){
				t.completed = null;
			}
		})
	}
	
	deleteTask(id){
		const index = this.tasks.findIndex(el => id == el.id);	
		this.tasks.splice(index, 1);
	}
}

module.exports = ListOfTasks;
