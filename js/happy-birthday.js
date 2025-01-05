// Function to add the "show" class and disable existing animations
// Arrow function to add the "show" class and disable existing animations
const applyShowAnimation = (delay) => {
  setTimeout(() => {
    // Add 'show' class to the text element after the specified delay
    const textElement = document.querySelector(".text");
    textElement.classList.add("show"); // Starts the final show animation

    // Disable ongoing animations by removing the animation-related properties
    const spans = document.querySelectorAll(".text span");
    spans.forEach((span) => {
      span.style.animation = "none"; // Disable the ongoing letter animation
      span.style.opacity = "1"; // Ensure the letters stay visible at the end of animation
      span.style.transform = "scale(1)"; // Ensure the letters remain at their final scale
    });

    // Select the buttons inside the container
    const buttons = document.querySelectorAll(".container-button");
    buttons.forEach((button) => {
      button.style.visibility = "visible"; // Make button visible
      button.style.opacity = "1"; // Fade in button
      button.style.transform = "translateY(0)"; // Move button to original position
    });
  }, delay); // Delay passed to the function (in milliseconds)
};

// Example of calling the function with a delay of 11000 milliseconds (11 seconds)
applyShowAnimation(8000);
