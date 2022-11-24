const resetBtn = document.getElementById("resetBtn")!;

const doPasswordsMatch = (val1: string, val2: string): boolean => {
  if (val1 === val2) return true;
  else return false;
};

const isLessThanEight = (val1: string): boolean => {
  if (val1.length < 8) return true;
  else return false;
};

const doesContainNum = (val1: string): RegExpMatchArray | null => {
  let pattern = /[1-9]/g;
  return val1.match(pattern);
};

resetBtn.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  const inputOneVal = (document.getElementById("inputOne")! as HTMLInputElement).value;
  const inputTwoVal = (document.getElementById("inputTwo")! as HTMLInputElement).value;

  const mainContent = document.getElementById("main")!;
  const afterReset = document.getElementById("afterReset")!;

  let matching: boolean = doPasswordsMatch(inputOneVal, inputTwoVal);
  const matchPara = document.getElementById("matchPara")!;

  let lessThanEight: boolean = isLessThanEight(inputOneVal);
  const lengthPara = document.getElementById("lengthPara")!;

  let containNum: RegExpMatchArray | null = doesContainNum(inputOneVal);
  const numPara = document.getElementById("numPara")!;

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
