const sumAll = function(min, max) {
    if (typeof(min) && typeof(max) === 'number' && min > 0 && max > 0) {
        if (min === max) {
            return min;
        } else if (min > max) {
            return min + sumAll(min - 1, max)
        }
        return max + sumAll(min, max - 1) 
    }
    return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(3, 5));