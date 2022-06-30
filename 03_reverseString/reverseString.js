const reverseString = function(str) {
    let strArray = str.split("");
    let reverseArray = [];
    for (let i = 0; i < strArray.length; i++) {
        reverseArray.unshift(strArray[i]);
    }
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
