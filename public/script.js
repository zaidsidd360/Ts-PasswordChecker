const resetBtn = document.getElementById("resetBtn")

const doPasswordsMatch = (val1, val2) => {
    if(val1 === val2) return true
    else return false
}

const isLessThanEight = (val1) => {
    // check if password is less than 8 characters
}

const doesContainNum = (val1) => {
    // check if password doesn't contain numbers
}

resetBtn.addEventListener("click", () => {
    const inputOneVal = document.getElementById("inputOne").value;
    const inputTwoVal = document.getElementById("inputTwo").value;

    let matching = doPasswordsMatch(inputOneVal, inputTwoVal);
    const errorPara = document.getElementById("errorText");
    if(matching === false) {
        errorPara.innerHTML = "Passwords do not match!"
    } 
    

})