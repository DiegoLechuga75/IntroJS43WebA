const rangeInput = document.querySelector(".range-input-container input");
const generatorForm = document.querySelector(".generator-form-container form");
const copyBoardIcon = document.querySelector(".generated-password-container img");


function handleRangePicker (e) {
    const inputPicked = e.target.value;
    const rangeTitle = document.querySelector(".range-input-container h1");
    rangeTitle.textContent = inputPicked;
}

function handleGenerator(e) {
    e.preventDefault();
    const passwordLenght = rangeInput.value;
    const arrayOfInputs = Array.from(document.querySelectorAll(".checkbox-container input"));
    const passwordSettings = {
        includeUppercase: arrayOfInputs[0].checked,
        includeLowercase: arrayOfInputs[1].checked,
        includeNumbers: arrayOfInputs[2].checked,
        includeSymbols: arrayOfInputs[3].checked,
    }
    
    let randomChars = "";
    if(passwordSettings.includeUppercase){
        randomChars += "ABCDEFGHIJKLMNOPQRSTWXYZ";
    }
    if(passwordSettings.includeLowercase){
        randomChars += "abcdefghijklmnopqrstwxyz"
    }
    if(passwordSettings.includeNumbers){
        randomChars += "1234567890";
    }
    if(passwordSettings.includeSymbols){
        randomChars += "!@#$%&*()_+=?"
    }

    let generatedPassword = "";

    for(let i = 0; i < passwordLenght; i++){
        let randomNumber = Math.floor(Math.random() * randomChars.length)
        generatedPassword += randomChars.charAt(randomNumber);
    }

    const passwordTitle = document.querySelector(".generated-password-container h1");
    passwordTitle.textContent = generatedPassword;
}

function handleCopyBoard(){
    const passwordTitle = document.querySelector(".generated-password-container h1");
    navigator.clipboard.writeText(passwordTitle.textContent);
}

rangeInput.addEventListener("change", (e) => handleRangePicker(e));
generatorForm.addEventListener("submit", (e) => handleGenerator(e));
copyBoardIcon.addEventListener("click", () => handleCopyBoard());