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
function setDivisionGame() {
    answerForm.setAttribute("data-gametype", "division");
    divisionQuiz()
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
    } else if (gametype == "division"){
        divisionQuiz();
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
    if (num1 > num2) {

    questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
    answerForm["rightAnswer"].value = (num1 - num2);
        
    } else {
        questionbox.textContent = "What is: " + num2 + " - " + num1 + "?";
    answerForm["rightAnswer"].value = (num2 - num1);
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

// DIVISION
function divisionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    if (num1 > num2) {

    questionbox.textContent = "What is: " + num1 + " / " + num2 + "?";
    answerForm["rightAnswer"].value = (num1 / num2);
        
    } else {
        questionbox.textContent = "What is: " + num2 + " / " + num1 + "?";
    answerForm["rightAnswer"].value = (num2 / num1);
    }
}
divisionQuiz();