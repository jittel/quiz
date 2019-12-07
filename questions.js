var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "what is the air-speed velocity of a flying swallow?",
        choices: ["fast", "kinda fast", "kinda slow?", "20mph"],
        answer: "fast"
    },
    {
        title: "some other stupid question?",
        choices: ["soopid answer", "smart answer", "42", ":("],
        answer: "42"
    },
    {
        title: "do you like bananas?",
        choices: ["yes", "no", "why?", "go away"],
        answer: "go away"
    },
];

// Sets a timer for 75 seconds upon loading the page
let elem = document.querySelector('#time-left');
let timeLeft = 75;
let timerId = setInterval(countdown, 1000);


function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        alert("too bad, out of time!");
    } else {
        elem.innerHTML = "Time: " + timeLeft;
        timeLeft--;
    }
}

countdown();

// UPDATE THE BUTTONS TO HAVE NEW ANSWERS AND NEW CORRECT VALUES

let countVar = 0;
let questionEl = document.getElementById("question");
let answerOneEl = document.getElementById("answer-one");
let answerTwoEl = document.getElementById("answer-two");
let answerThreeEl = document.getElementById("answer-three");
let answerFourEl = document.getElementById("answer-four");
let trueAnswer;
let answerGuess;


// does things when user clicks on one of the buttons
function click(event) {
    if (event) {
        event.preventDefault();
    }
    answerGuess = event.target.textContent;
    console.log(answerGuess + ", guess")
    console.log(trueAnswer + ", correct");
    // debugger;
    if (answerGuess === trueAnswer) {
        // eval(0);
        console.log("this works");
        countVar++;
    } else {
        //time minus ten
        timeLeft = timeLeft - 10;
        console.log("wrong wrong wrong")
        //return?
    }
    display();
}

// updates the displayed information
function display() {

    if (countVar > questions.length - 1) {
        clearTimeout(timerId);
        alert("STOPPPPP");
        return;
    }
    questionEl.textContent = questions[countVar].title;
    answerOneEl.textContent = questions[countVar].choices[0];
    answerTwoEl.textContent = questions[countVar].choices[1];
    answerThreeEl.textContent = questions[countVar].choices[2];
    answerFourEl.textContent = questions[countVar].choices[3];
    trueAnswer = questions[countVar].answer;
    // console.log(trueAnswer);
}

display()

// just giving this a shorthand
function eval(i) {
    document.querySelectorAll('.answer')[i].addEventListener('click', click);
}

// document.getElementById("answer").onclick(function() {
let thing = document.querySelector(".answer");
thing.addEventListener("click", click)
for (let i = 0; i < document.querySelectorAll('.answer').length; i++) {
        eval(i);
}



