// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// * code was untouched before starting pt.2 below

// * PT2: my code at bottom of page did not work, tried to use max's example with mine

const categories = document.querySelectorAll('[class^="cat-"]');
const questions = placeholderQuestions;

const modal = document.querySelector('.modal');
const modalQuestion = document.querySelector('.modal-question');
const closeButton = document.querySelector('.close-button');

// Function to show the modal
function showModal(question) {
    modalQuestion.textContent = question;
    modal.style.display = 'flex';
}

// Function to hide the modal
function hideModal() {
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    hideModal(); // Ensure modal is hidden when the page loads
});

// Select all html elements with a class that starts with "cat-"
categories.forEach((category) => {
    category.addEventListener('click', (event) => {
        event.preventDefault();
        const className = category.classList[0]; // Get the first class name
        const match = className.match(/cat-(\d+)/); // Match the number in the class name
        if (match) {
            const categoryName = match[1]; // Extract the number
            const questionValue = category.textContent; // Get the question value from the category text
            const questionIndex = (parseInt(categoryName) - 1) * 10 + parseInt(questionValue) / 100 - 1;

            const question = questions[questionIndex];
            console.log(question);

            showModal(question.question); 
        }
    });
});

// Hide the modal when clicking the close button
closeButton.addEventListener('click', hideModal);

// Hide the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideModal();
    }
});









 // ! BELOW IS PSEUDO CODE  

//  PT2: 
// const play-button = document.getElementById('play-button');


// const categories = document.querySelectorAll('[class^="question"]');
// const questions = placeholderQuestions;


//  for round 2 below
// categories.forEach((category) => {
//     category.addEventListener('click', () => {
        
//     }))


//  PT2: creating function to update the turn notification
// function updateTurnNotification(playerNumber) {
//     const notificationElement = document.getElementById('turn-notification');
//     turnNotification.textContent = `It's player ${playerNumber}'s turn`;
// }


//  PT2: here i'm trying to switch the turns and start with player 1 initially
// let currentPlayer = 1;
// updateTurnNotification(currentPlayer);


//  PT2: once it's time to switch turns
// currentPlayer = currentPlayer === 1 ? 2 : 1;
// updateTurnNotification(currentPlayer);

//! MAY WANT TO DELETE RED CODE BELOW LATER
 //!   const player1Name = document.getElementById('player1-name').textContent;
 //!   const player2Name = document.getElementById('player2-name').textContent;
 //!   const turnNotification = document.getElementById('turn-notification');
 //!  turnNotification.textContent = `It's ${player1Name}'s turn`;



// document.addEventListener('DOMContentLoaded', () => {
//     const container =
//     document.querySelectorAll('.container');
//     container.forEach((container) => {
//         container.addEventListener('click', (event) => {
    
//             handleQuestionClick(container.id, event);
//         });
//     });
//     })

//  const cell =
//  document.getElementById('cell-1-1');

