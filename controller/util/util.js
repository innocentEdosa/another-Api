const printErr = (errorArr) => {
  const Temp = [];
  for (let i = 0; i < errorArr.length; i += 1) { Temp.push(errorArr[i].msg); }
  return Temp;
};

const errorCheck = (error, res) => {
  if (!error.isEmpty()) {
    const errorMessages = printErr(error.array());
    return res.status(422).json({
      status: 422,
      error: errorMessages,
    });
  }
  return true;
};

module.exports = {
  printError: printErr,
  checkError: errorCheck,
};
