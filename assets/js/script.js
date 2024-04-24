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
    }
    
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const usernameInput = document.getElementById("username");
const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const scoreValueElement = document.getElementById("score-value");

let questionIndex = 0;
let score = 0;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    questionIndex++;
    if (questionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

function startQuiz() {
    const username = usernameInput.value.trim();
    if (!username) {
        alert("Please enter username!");
        return;
    }
    document.getElementById("user-input").style.display = "none";
    document.getElementById("game").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizQuestions[questionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => handleAnswer(option)); 
        optionsElement.appendChild(button);
    });

    feedbackElement.textContent = "";
    nextButton.style.display = "none";
}

function handleAnswer(preferredOption) {
    const currentQuestion = quizQuestions[questionIndex];
    if (preferredOption === currentQuestion.answer) {
        score++;
       
        feedbackElement.textContent = "Correct!";
    } else {
       
        feedbackElement.textContent = "Incorrect! The correct answer is: " + currentQuestion.answer;

    }

    scoreValueElement.textContent = score;
   
    nextButton.style.display = "block";
}
  
function endQuiz() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = `Quiz is over! Your final score is ${score}.`;
    nextButton.style.display = "none";
}
