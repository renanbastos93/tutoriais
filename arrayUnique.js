const arrayUnique = (arr, param, value) => typeof arr[0] === 'object' ? arr.filter(item => item[param] == value) : [...new Set(arr)];
