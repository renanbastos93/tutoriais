const arrayUnique = (arr, param) => typeof arr[0] === "object" ? 
        arr.filter((item, index, arr) => {
        let arrObj = arr.map(item => item[param]);
        return index === arrObj.indexOf(item[param]);
    }
) : [...new Set(arr)];