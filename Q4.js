//todo:
// look the html file with input and p tag.
// Write a script that logs key presses(which key of keyboard pressed) and displays input field values(show what it is in input in p tag)
//Note: use keydown and keyup event listeners.

//Answer

const input = document.querySelector("input");
const displayParagraph = document.getElementById("displayParagraph");

input.addEventListener("keyup", logKey);

function logKey(e) {
    displayParagraph.textContent += document.getElementById('inputField').value;
}
