
// ... (rest of the code for handling input and other functionalities)

// Add a click event listener to the document
document.addEventListener("click", function (event) {
  // Check if the click target is not the textarea
  if (event.target !== document.getElementById("newText")) {
    resetTextArea();
  }
});

function resetTextArea() {
  // Reset the textarea content
  document.getElementById("newText").value = "";

  // Stop the timer
  stopTimer();

  // Reset the timer display
  document.getElementById("timer").textContent = "0 seconds";
}
