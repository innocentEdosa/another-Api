const printErr = (errorArr) => {
  const Temp = [];
  for (let i = 0; i < errorArr.length; i += 1) { Temp.push(errorArr[i].msg); }
  return Temp;
};


module.exports = {
  printError: printErr,
};
