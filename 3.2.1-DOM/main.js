const containers = document.querySelectorAll('.container');

const containersArray = Array.from(containers);

console.log(containers);

console.log(containersArray);

const firstDivParagraph = containersArray[0].children[1];

firstDivParagraph.textContent = "Este es el primer texto que modifico con el DOM"

function changeContainerText(divContainer, textToChange){
    const text = divContainer.children[1];
    text.textContent = textToChange;
}

const messages = [
    "Este es el primer texto que modifico con el DOM",
    "Este es el segundo texto que modifico con el DOM", 
    "Este es el tercer texto que modifico con el DOM"
]

for(let i = 0; i < containersArray.length; i++){
    if(messages[i]){
        changeContainerText(containersArray[i], messages[i]);
    } else {
        changeContainerText(containersArray[i], "Este es un texto generico");
    }
}

function showMessage(e){
    let message = e.target.parentElement.children[1];
    console.log(message.textContent);
}

for(let i = 0; i < containersArray.length; i++){
    let button = containersArray[i].children[2];
    button.addEventListener("click", (e) => showMessage(e));
}

