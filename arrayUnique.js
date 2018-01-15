const arrayUnique = (arr, param) => typeof arr[0] === 'object' ? 
        arr.filter((item, index, arr) => {
        let arrObj = arr.map(item => item[param]);
        return index === arrObj.indexOf(item[param]);
    }
) : [...new Set(arr)];

arrayUnique([1,2,3,4,5,1,2,3,4,5,1,2,3,1]);
// [1,2,3,4,5]

arrayUnique(['javascript', 'nodejs', 'javascript']);
// ['javascript', 'nodejs']

arrayUnique([
    {
        name: 'JavaScript',
        url: 'https://www.ecma-international.org/memento/TC39.htm'
    },
    {
        name: 'NodeJS',
        url: 'www.nodejs.org'
    },
    {
        name: 'NodeJS',
        url: 'www.nodejs.org'
    },
    {
        name: 'JavaScript',
        url: 'https://www.ecma-international.org/memento/TC39.htm'
    }
], 'name');
// [{
//     name: 'JavaScript',
//     url: 'https://www.ecma-international.org/memento/TC39.htm'
// },
// {
//     name: 'NodeJS',
//     url: 'www.nodejs.org'
// }]
