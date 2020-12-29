//defines questions array
var questArray = [
    {
        "questionText": "Commonly used data types do not include:",
        "opt1" : "1. Strings",
        "opt2" : "2. Booleans",
        "opt3" : "3. Alerts",
        "opt4" : "4. Numbers",
        "correct" : "3. Alerts"
    },
    {
        "questionText": "The condition in an if / else statement is enclosed with _____",
        "opt1" : "1. Quotes",
        "opt2" : "2. Curly brackets",
        "opt3" : "3. Paranthesis",
        "opt4" : "4. Square brackets",
        "correct" : "3. Paranthesis"
    },
    {
        "questionText": "Arrays in Javascript can be used to store _____",
        "opt1" : "1. Numbers and Strings",
        "opt2" : "2. Other arrays",
        "opt3" : "3. Booleans",
        "opt4" : "4. All of the above",
        "correct" : "4. All of the above"
    },
    {
        "questionText": "String values must be enclosed within _____ when being assigned to variable",
        "opt1" : "1. Commas",
        "opt2" : "2. Curly brackets",
        "opt3" : "3. Quotes",
        "opt4" : "4. Parenthesis",
        "correct" : "3. Quotes"
    },
    {
        "questionText": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "opt1" : "1. Javascript",
        "opt2" : "2. Terminal/bash",
        "opt3" : "3. For loops",
        "opt4" : "4. Console.log",
        "correct" : "4. Console.log"
    }
    ]

var scores = [];
var body = document.body;
var mainpageEl = document.getElementById("main-page")
var startquizEl = document.getElementById("start-quiz");
var questformEl = document.getElementById("quest-form");
var questionsEl = document.getElementById("questions")
var questionEl = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");

var loadQuestions = function()
{
    questionEl.textContent = questArray[cnt].questionText;
    option1El.textContent = questArray[cnt].opt1;
    option2El.textContent = questArray[cnt].opt2;
    option3El.textContent = questArray[cnt].opt3;
    option4El.textContent = questArray[cnt].opt4;
    correctAns = questArray[cnt].correct;  
};

var startQuiz = function()
{
    document.getElementById("timer").innerHTML = 75;
    myVar = setInterval(myTimer, 1000);
    mainpageEl.parentNode.removeChild(mainpageEl);
    loadQuestions();     
    body.appendChild(questionsEl); 
    body.appendChild(resultEl);  
};







questionsEl.parentNode.removeChild(questionsEl);
resultEl.parentNode.removeChild(resultEl);
subFormEl.parentNode.removeChild(subFormEl);
startquizEl.addEventListener("click",startQuiz);