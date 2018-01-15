var exec = require('child_process').exec,
child;
Promise = Promise || global.Promise;    

child = () => 
{
	return new Promise((resolve, reject) => {
		exec('echo %PATH%',
			function (error, stdout, stderr) {
				
				if(stdout!==''){
					resolve(stdout);
				}
				if(stderr!==''){
					reject(stderr);
				}
				if (error !== null) {
					reject(error);
				}
			});
	});
}

child().then(success => console.log(success)).catch(error => console.log(error));
