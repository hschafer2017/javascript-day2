let score = 0; 
let scorebox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerForm = document.getElementById("quizForm");

function additionQuiz() {
    let num1 = Math.floor(Math.random() *50); 
    let num2 = Math.floor(Math.random() *50);
    
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    answerForm["rightAnswer"].value = (num1, num2); 
}
// math.random gives you a random number between 0 and 50, and it can be a decimal. Math.floor then rounds it back down so you get a whole number. 
additionQuiz(); 