// script.js
// This script adds functionality to the Message Generator button.
/*
const messages = [
    "Have a great day!",
    "Keep up the good work!",
    "You are awesome!",
    "Stay positive and strong!",
    "Success is on your way!"
];

const messageDiv = document.getElementById('message');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageDiv.textContent = messages[randomIndex];
});
*/
const subjects = ["Success", "Happiness", "Determination"];

const actions = ["is key to achieving your goals.", "comes from within.", "is a journey, not a destination."];

const outcomes = ["Embrace the challenge!", "Stay focused and persistent.", "Believe in yourself!"];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage() {
    const subject = getRandomElement(subjects);
    const action = getRandomElement(actions);
    const outcome = getRandomElement(outcomes);
    
    return `${subject} ${action} ${outcome}.`;
}


document.getElementById("generate-btn").addEventListener("click", function() {
    const message = generateMessage();
    document.getElementById("message").innerText = message;
});