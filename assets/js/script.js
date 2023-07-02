// Variables
const mainLabel = document.getElementById('mainLabel');
const subLabel = document.getElementById('subLabel');


// Clear and Delete Button
let clearButton = document.getElementById('clearButton').onclick = () => {
    mainLabel.innerText = "";
    subLabel.innerText = "";
};

let deleteButton = document.getElementById('deleteButton').onclick = () => {
    if (mainLabel.innerText.length > 0) {
        mainLabel.innerText = mainLabel.innerText.slice(0, -1);
    };
};




// Equals button or Eval Button
const equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener("click", () => {
    let result = eval(mainLabel.innerText);
    
    if (mainLabel.innerText == "") {
        subLabel.innerText = null;
    } else {
        subLabel.innerText = result;
    };
});



// Number Buttons
const numberKeys = document.querySelectorAll('.number-keys');
// For each number keys, every click will display the inner text of a key to mainLabel
numberKeys.forEach((key) => {
    // add event listener
    key.addEventListener("click", (event) => {
        pressedKeys = event.target.innerText;
        mainLabel.innerText += pressedKeys;
        document.querySelector('.invalid').style.display = 'none';
    });
});



// Operators Buttons
const operatorButtons = document.querySelectorAll('.operator-key');
// For each operator keys, if there is no numbers or text in mainLabel, operator will not be displayed.
operatorButtons.forEach((opsKey) => {
    // add event listener
    opsKey.addEventListener("click", (event) => {
        if (mainLabel.innerText == "" || mainLabel.innerText.length <= 0) {
            document.querySelector('.invalid').innerText = "Invalid Format Used.";
            document.querySelector('.invalid').style.display = 'block';
            
        } else {
            mainLabel.innerText += event.target.innerText;
        };
    });
});

const pnButton = document.querySelector('#positive-negative-operator');
pnButton.addEventListener("click", () => {
    mainLabel.innerText += '-';
})