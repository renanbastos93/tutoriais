const arrayUnique = arr => typeof arr[0] === 'object' ? null : [...new Set(arr)];
