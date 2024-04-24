//This is an array of the quiz question
const quizQuestions = [
    {
        question: "Which continent is Ghana",
        options: ["Africa", "Europe", "Asia", "Madrid"],
        answer: "Africa",
    },
    {
        question: "How many month is it in a year?",
        options: ["3", "4", "5", "12"],
        answer: "4",
    },
    {
        question: "Which continent is China?",
        options: ["Asia", "Africa", "Europe", "India"],
        answer: "Asia",
    },
    {
        question: "Which continent is Spain?",
        options: ["Asia", "Africa", "Europe", "India"],
        answer: "Europe",
    },
    {
        question: "What is the largest continent?",
        options: ["Asia", "Africa", "Europe", "India"],
        answer: "Asia",
    },
    {
        question: "Which continent is South africa?",
        options: ["Asia", "Africa", "Europe", "India"],
        answer: "Africa",
    },
    {
        question: "Which continent is Tanzania?",
        options: ["Asia", "Africa", "Europe", "India"],
        answer: "Africa",
    },
    {
        question: "Which continent is Namibia?",
        options: ["Asia", "Africa", "Europe", "India"],
        answer: "Africa",
    },
    {
        question: "Which continent is Germany",
        options: ["Asia", "Africa", "Europe", "India"],
        answer: "Europe",
    },
    {
        question: "Which continent is Kenya?",
        options: ["Asia", "Africa", "Europe", "India"],
        answer: "Africa",
    }   
    
];
//This variable represents HTML elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const usernameInput = document.getElementById("username");
const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const scoreValueElement = document.getElementById("score-value");

//Variable for questionindex and the score as it increases
let questionIndex = 0;
let score = 0;

//events(i.e. event listener) taken as soon as next and start button is clicked
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    questionIndex++;

    //This checks if there are more questions to be displayed 
    if (questionIndex < quizQuestions.length) {
        showQuestion();
    } else {
//if there is no more question it ends the quiz
        endQuiz();
    }
});

//This function starts the quiz
function startQuiz() {
    //this get the username value
    const username = usernameInput.value.trim();

    //if username is not entered, it shows user an alert to enter a username
    if (!username) {
        alert("Please enter username!");
        return;
    }

    //This seperates the input session from the quiz session
    document.getElementById("user-input").style.display = "none";
    document.getElementById("game").style.display = "block";

    //This shows the first question
    showQuestion();
}

//This function is to display quiz question
function showQuestion() {

 //Get the current question object from the quizQuestions array 
    const currentQuestion = quizQuestions[questionIndex];
    questionElement.textContent = currentQuestion.question;

    //this helps to clear the options 
    optionsElement.innerHTML = "";

    // Loop through the options for the current question
    currentQuestion.options.forEach(option => {
        // Create a button element for each option
        const button = document.createElement("button");
        // Set the button text to the option text
        button.textContent = option;
        // Add a CSS class to the button for styling
        button.classList.add("option");
        // Add an event listener to the button to handle the answer selection
        button.addEventListener("click", () => handleAnswer(option));  
        optionsElement.appendChild(button);
    });

    // Clear any previous feedback message
    feedbackElement.textContent = "";
    // Hide the next button until an option is selected
    nextButton.style.display = "none";
}

// Function to handle user answer selection
function handleAnswer(preferredOption) {
    // Get the current question object from the quizQuestions array
    const currentQuestion = quizQuestions[questionIndex];
    // Check if the preferred option matches the correct answer
    if (preferredOption === currentQuestion.answer) {
        // If correct, increment the score
        score++;
        // Provide feedback that the answer is correct
        feedbackElement.textContent = "Correct!";
    } else {
        // If incorrect, provide feedback with the correct answer
        feedbackElement.textContent = "Incorrect! The correct answer is: " + currentQuestion.answer;
    }

    // Update the displayed score
    scoreValueElement.textContent = score;
    // Display the next button to proceed to the next question
    nextButton.style.display = "block";
}

//This function ends the quiz
function endQuiz() {
    //clear the question 
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    //This shows final score
    feedbackElement.textContent = `Quiz is over! Your final score is ${score}.`;
    nextButton.style.display = "none";
}
