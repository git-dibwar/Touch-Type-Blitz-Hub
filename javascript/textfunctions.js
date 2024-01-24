
//DOM elements
const textInput = document.getElementById("textInput");
const textSaveButton = document.getElementById("textSaveButton");
const newText = document.getElementById("newText");
const savedTextContainer = document.getElementById("savedTextContainer");
const wordCount = document.getElementById("wordCount");
const resultElement = document.getElementById("result");
const statusElement = document.getElementById("status");
let words = 0;
//Event listener for saving text
textSaveButton.addEventListener("click", function () {
  const savedText = textInput.value;
  const noOfWords = textInput.value;

  //Count the words
  const withoutSpace = noOfWords.replace(/\s/g, "");
  const chCount = withoutSpace.length;
  words = Math.round(chCount/4);
  console.log(words);
  wordCount.textContent = "Total Words: " + Math.round(words);

  // Update the content of the savedTextContainer
  savedTextContainer.innerHTML = "";

  // Create span elements for each character and append them to savedTextContainer
  for (let i = 0; i < savedText.length; i++) {
    const span = document.createElement("span");
    span.textContent = savedText[i];
    savedTextContainer.appendChild(span);
  }

  console.log("Text saved");
  textInput.readOnly = true; //Disable further input
  textInput.style.display = "none";
  newText.style.display = "block";
  savedTextContainer.style.display = "block";
});

//Event listener for input in the new text area
textAddButton.addEventListener("click", function () {
  textInput.style.display = "block"; //show the textarea
  newText.style.display = "none";
  savedTextContainer.style.display = "none";
  savedTextContainer.innerHTML = "";
  textInput.readOnly = false; //Enable input
  stopTimer(); //Stop the timer
});

// Add event listener for input in the new text area
let completed = false;
newText.addEventListener("input", function() {
  const enteredText = newText.value;
  const compareText = savedTextContainer.textContent;

  if (!timerInterval && newText.value !== "") {
    startTimer();
  }
  

  let allCorrect = true;
  // let completed = false;

  // Loop through each character
  for (let i = 0; i < savedTextContainer.children.length; i++) {
    // Check if the character is correct

    const isCorrect =
      i < enteredText.length && enteredText[i] === compareText[i];

    // Update correctness and completion status

    if ((allCorrect = allCorrect && isCorrect)) {
      console.log("all Correct");
    } else {
      console.log("some Wrong");
    }
    if ((completed = enteredText.length === compareText.length)) {
      console.log("completed");
    }
    if(enteredText.length===compareText.length){
      stopTimer();
      newText.readOnly = true;
    }

    // Update the background color of the span based on correctness
    const span = savedTextContainer.children[i];
    span.style.backgroundColor = isCorrect ? "green" : "red";
  }

  // Update the content of the result element
  resultElement.textContent = "Result: " + allCorrect;

  // Update the content of the status element
  statusElement.textContent = completed
    ? "Status: Completed"
    : "Status: Incomplete";
    
});