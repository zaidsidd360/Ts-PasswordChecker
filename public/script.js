const resetBtn = document.getElementById("resetBtn");

const doPasswordsMatch = (val1, val2) => {
  if (val1 === val2) return true;
  else return false;
};

const isLessThanEight = (val1) => {
  if (val1.length < 8) return true;
  else return false;
};

const doesContainNum = (val1) => {
  let pattern = /[1-9]/g;
  return val1.match(pattern);
};

resetBtn.addEventListener("click", () => {
  const inputOne = document.getElementById("inputOne");
  const inputTwo = document.getElementById("inputTwo");
  let inputOneVal = inputOne.value;
  let inputTwoVal = inputTwo.value;

  const mainContent = document.getElementById("main");
  const afterReset = document.getElementById("afterReset");

  let matching = doPasswordsMatch(inputOneVal, inputTwoVal);
  const matchPara = document.getElementById("matchPara");

  let lessThanEight = isLessThanEight(inputOneVal);
  const lengthPara = document.getElementById("lengthPara");

  let containNum = doesContainNum(inputOneVal);
  const numPara = document.getElementById("numPara");

  if (matching === false) {
    matchPara.innerHTML = "Passwords do not match.";
  } else {
    matchPara.style.display = "none";
  }

  if (lessThanEight === true) {
    lengthPara.innerHTML = "Password length must be greater than 8.";
  } else {
    lengthPara.style.display = "none";
  }

  if (containNum === null) {
    numPara.innerHTML = "Password must contain at least one number.";
  } else {
    numPara.style.display = "none";
  }

  if (matching === true && lessThanEight === false && containNum !== null) {
    mainContent.style.display = "none";
    afterReset.style.display = "flex";
    afterReset.style.flexDirection = "column";
  }
});
