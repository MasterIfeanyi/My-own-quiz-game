const theQuestion = document.querySelector("#question");

const theOptions = document.querySelector("#options");

const total = document.querySelector("#total");

const endMessage = document.querySelector(".end-message");

const rightAnswers = document.querySelector("#correct");

const resetButton = document.querySelector(".reset-button");

const questions = [
    {
        question: "What type of loop will always execute at least once ?",
        options: ["for", "while", "do-while"],
        correct: "do-while"
    },
    {
        question: "Which of the following HTTP status codes means 'Not Found' ?",
        options: ["200", "404", "400", "500"],
        correct: "404"
    },
    {
        question: "What does the fetch API return ?",
        options: ["string", "promise", "number", "float"],
        correct: "promise"
    },
    {
        question: "Who bombed Hiroshima, Japan ?",
        options: ["Germany", "France", "USA", "Italy"],
        correct: "USA"
    }
]

let buttonAnswer;


total.textContent = questions.length;

console.log(total);

//what question number are you on
let question_number = 0;

//how many answers do you have correctly
let correct = 0;

//how many wrong answers are there
let wrongAnswers = 0;

// document.addEventListener("DOMContentLoaded", () => {
//     load_question();
// });

resetButton.addEventListener('click', resetGame)

function resetGame() {
    document.body.classList.remove("overlay-is-open");
    question_number = 0
    correct = 0
    rightAnswers.textContent = correct
    load_question()
}



function load_question() {
    let question = questions[question_number].question;
    theQuestion.textContent = question;
    let options = questions[question_number].options;
    // console.log(options);
    theOptions.innerHTML = '';
    options.forEach(option => {
        theOptions.innerHTML += `<button class="option">${option}</button>`;
    });
    rightAnswers.textContent = correct;
    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            
            buttonAnswer = option.textContent;

            if (questions[question_number].correct == buttonAnswer) {
            alert("let's go");
            question_number++;
            correct++;
            if (question_number >= questions.length) {
                checkLogic();
                return false
            }             
            load_question();
            } else {
                if (questions[question_number].correct != buttonAnswer) {
                    checkLogic();
                }
            }
        }
    })
}

load_question();

function checkLogic() {
    endMessage.textContent = `you got ${correct} correct of ${questions.length} total`;
    document.body.classList.add("overlay-is-open");
}

