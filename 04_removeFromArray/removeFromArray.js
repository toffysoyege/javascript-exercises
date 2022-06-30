const removeFromArray = function(arr, ...elems) {
    for (const elem of elems) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === elem) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

console.log(removeFromArray([1,2,3,4], 3));

// Do not edit below this line
module.exports = removeFromArray;

