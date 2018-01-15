const util = require('util');
const promisify = util.promisify;

function calcTable(num, callback)
{
	let res = [];

	if(typeof num !== 'number'){
		throw new Error('must param not is number');
	}
	
	for(var i=0; i<=10; i++){
		res.push(i*num);
	}

	callback(res);
} 

// It can also be that way -> calcTable = promisify(calcTable);
const myPromise = promisify(calcTable);

//Return success
myPromise(7)
.then(success => console.log(success))
.catch(fail => console.log(fail));

//Return Fail
myPromise('seven')
.then(success => console.log(success))
.catch(fail => console.log(fail));
