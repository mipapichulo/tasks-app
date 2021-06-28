const moment = require('moment');

const getDateNow = () => moment().format('MMMM Do YYYY, h:mm:ss a');

const printArray = (arr, emptyMsg) => {
	if(arr.length){
		for(const el of arr){
			console.log(el);
		}
	}else{
		console.log(emptyMsg);
	}
}

module.exports = {
	getDateNow,
	printArray
}
