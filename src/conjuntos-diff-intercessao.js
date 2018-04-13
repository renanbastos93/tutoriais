
var arrJson1 = [
    {
        id: 1,
        name: "a"
    },{
        id: 2,
        name: "a"
    },{
        id: 3,
        name: "a"
    },{
        id: 4,
        name: "a"
    }
]

var arrJson2 = [
    {
        id: 7,
        name: "a"
    },{
        id: 0,
        name: "a"
    },{
        id: 3,
        name: "a"
    },{
        id: 4,
        name: "a"
    },{
        id: 2,
        name: "a"
    },{
        id: 9,
        name: "a"
    }
]

//Intercessão
arrJson1.filter(x => arrJson2.some(y => y.id == x.id));

//diff de um para o outro
arrJson1.filter(x => !arrJson2.some(y => y.id == x.id)); // 1
arrJson2.filter(x => !arrJson1.some(y => y.id == x.id)); // 7, 0, 9

//Diff da intercessão
arrJson1.filter(x => !arrJson2.some(y => y.id == x.id)).concat(arrJson2.filter(x => !arrJson1.some(y => y.id == x.id)))
