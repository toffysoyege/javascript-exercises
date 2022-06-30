const repeatString = function(str, count) {
    newStr = ""
    if (count > -1) {
        for (let i = 0; i < count; i++) {
            newStr += str;
        }
        return newStr;
    }
    return 'ERROR'
};

// Do not edit below this line
module.exports = repeatString;
