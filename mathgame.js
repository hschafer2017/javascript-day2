let score = 0;
let scoreBox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerForm = document.getElementById("quizForm");

function setAdditionGame() {
    answerForm.setAttribute("data-gametype", "addition");
    additionQuiz()
}

function setSubtractionGame() {
    answerForm.setAttribute("data-gametype", "subtraction");
    subtractionQuiz()
}

function setMultiplicationGame() {
    answerForm.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz()
}

function checkAnswer() {
    let gametype = answerForm.getAttribute("data-gametype");
    scoreBox.textContent = score;
    if (answerForm["answer"].value == answerForm["rightAnswer"].value) {
        alert("Hey! You got it right!");
        score++;
    }
    else {
        alert("Oh no! Wrong Answer!");
        score--;
    }
    answerForm["answer"].value = "";
    if (gametype == "addition") {
        additionQuiz()
    }
    else if (gametype == "subtraction") {
        subtractionQuiz();
    }
    else if (gametype == "multiplication") {
        multiplicationQuiz();
    }
    return false;
}

// ADDITION
function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);

    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    answerForm["rightAnswer"].value = (num1 + num2);
}
// math.random gives you a random number between 0 and 50, and it can be a decimal. Math.floor then rounds it back down so you get a whole number. 
additionQuiz();

// SUBTRACTION
function subtractionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);

    questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
    answerForm["rightAnswer"].value = (num1 - num2);
         if (num1 < num2) {
           return; 
    }

}
subtractionQuiz();

// MULTIPLICATION
function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);

    questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
    answerForm["rightAnswer"].value = (num1 * num2);
}
multiplicationQuiz();
