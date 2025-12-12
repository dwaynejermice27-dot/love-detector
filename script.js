document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.querySelector('.question-container');
    const resultContainer = document.querySelector('.result-container');
    const yesBtn = document.querySelector('.js-yes-btn');
    const noBtn = document.querySelector('.js-no-btn');

    // --- 1. Logic for the 'Yes' Button ---
    yesBtn.addEventListener('click', () => {
        // Hide the question and show the result
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';
    });

    // --- 2. Logic for the 'No' Button (The tricky part!) ---
    // Function to calculate a random position for the button
    const moveNoButton = () => {
        // Get the current dimensions of the viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get the dimensions of the button itself
        const buttonRect = noBtn.getBoundingClientRect();

        // Calculate a random position, making sure the button stays on screen
        const newX = Math.random() * (viewportWidth - buttonRect.width);
        const newY = Math.random() * (viewportHeight - buttonRect.height);

        // Apply the new position
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    };

    // Attach the movement function to the 'No' button's hover event
    noBtn.addEventListener('mouseover', moveNoButton);
});