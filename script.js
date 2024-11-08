// Ensure the JavaScript file is loaded
console.log("JavaScript file loaded");

// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the main image container and all gallery buttons
    const imageContainer = document.getElementById('displayed-image');
    const buttons = document.querySelectorAll('.gallery-button');

    // Function to change the displayed image and update button styles
    function changeImage(event) {
        // Remove 'active' class from all buttons
        buttons.forEach(button => button.classList.remove('active'));

        // Add 'active' class to the clicked button
        event.target.classList.add('active');

        // Get the new image from the data attribute of the clicked button
        const newImage = event.target.getAttribute('data-image');
        console.log("Changing image to:", newImage);

        // Update the image source and alt text
        imageContainer.src = newImage;
        const altText = `Photo of a ${event.target.textContent.toLowerCase()}`;
        imageContainer.alt = altText;
    }

    // Add click event listeners to each button
    buttons.forEach(button => {
        button.addEventListener('click', changeImage);
    });
});
