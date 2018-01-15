function arrayUniqueJSON(arr, param){
  let uniqueParam = [];
    for(i = 0; i< arr.length; i++){    
      if(uniqueParam.indexOf(arr[i][param]) === -1){
          uniqueParam.push(arr[i][param]);        
      }        
  }
	return uniqueParam;
}
const arrayUnique = (arr, param) => typeof arr[0] === 'object' ? arrayUniqueJSON(arr, param) : [...new Set(arr)];
