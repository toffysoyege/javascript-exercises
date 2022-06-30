const ftoc = function(fah) {
  let cal = (fah-32) * 5 / 9;
  return Math.round(cal * 10) / 10;

};

const ctof = function(cel) {
  let fah = (cel*9) /5 + 32;
  return Math.round(fah*10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

console.log(ctof(0))