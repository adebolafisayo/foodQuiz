const quizQuestions = [
    {
        question: "Which continent is Ghana",
        options: ["Africa", "Europe", "Asia", "Madrid"],
        answer: "Africa",
        feedbackImg: "assets/images/incorrect.png"
    },
    {
        question: "How many months is in a year?",
        options: ["3", "4", "5", "12"],
        answer: "12",
        feedbackImg: "assets/images/incorrect.png"
    }
    
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const feedbackImgElement = document.getElementById("feedback-img");
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
