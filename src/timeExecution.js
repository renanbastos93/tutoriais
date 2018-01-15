var arr = [];

function someCalc(index) {
    return index * 5 + 1 / 3 * 8;
};

for (let i = 0; i < 10000; i++) {
  arr[i] = i;
};

console.time('#forEach');
arr.forEach(
    (item, index) => {
        item = someCalc(item);
    }
)
console.timeEnd('#forEach');

console.time('#For');
for(let i=0; i<arr.length; i++){
     arr[i] = someCalc(arr[i]);
}
console.timeEnd('#For');

var timeStart = performance.now();
for(let i=0; i < arr.length; i++){
     arr[i] = someCalc(arr[i]);
}
var timeEnd = performance.now();
// In this case it took 1.069...92433 ms
console.log("Duration " + (timeEnd - timeStart) + " ms . . .");

/* 
    NodeJS
*/
var timeStart = Date.now();
for(let i=0; i < arr.length; i++){
     arr[i] = someCalc(arr[i]);
}
var timeEnd = Date.now();
// In this case it took 1 ms
console.log("Duration " + (timeEnd - timeStart) + " ms . . .");
