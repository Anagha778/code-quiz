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
var resultEl = document.getElementById("result");
var verifyEl =  document.getElementById("verify");
var subFormEl = document.getElementById("submit-form");
var correctAns="";
var cnt = 0;
var d = 75;
var myVar="";
var Highscore = 0;

var myTimer = function() 
  { 
    d=d-1;
    document.getElementById("timer").innerHTML = d;  
    if (d<0 || d===0)
    {
        clearInterval(myVar);
    } 
};

var showResult = function()
{
    clearInterval(myVar);
    Highscore = d;
    if (d<0){ 
    document.getElementById("timer").innerHTML = 0;}
    else{
    document.getElementById("timer").innerHTML = d;}
    localStorage.setItem("hScore",Highscore);
    questionsEl.parentNode.removeChild(questionsEl);
    body.appendChild(subFormEl);
    body.appendChild(resultEl);
    document.getElementById("fscore").textContent = d;
};

var buttonclick = function(event)
{   
    var Seletedans = document.getElementById(this.id).innerText; 
    if(cnt < questArray.length && d>0)
    {
        if (Seletedans === correctAns)
        {
            verifyEl.innerText = "Correct!" ;
        }
        else
        {   d=d-10;
            verifyEl.innerText = "Wrong!";            
        }  
    
        cnt = cnt+1; 
        if ((cnt === questArray.length && d>0) || (d<0))
        {
            showResult();       
        }
        else
        {
        loadQuestions();  
        } 
    }  
    else if((cnt < questArray.length && d===0) || (cnt < questArray.length && d<0))
    {
        showResult();
    } 
    else if(cnt === questArray.length-1 && d<0)
    {
        showResult();
    }    
};

var loadQuestions = function()
{
    questionEl.textContent = questArray[cnt].questionText;
    option1El.textContent = questArray[cnt].opt1;
    option2El.textContent = questArray[cnt].opt2;
    option3El.textContent = questArray[cnt].opt3;
    option4El.textContent = questArray[cnt].opt4;
    correctAns = questArray[cnt].correct;  
};

var startQuiz = function(event)
{
    document.getElementById("timer").innerHTML = 75;
    myVar = setInterval(myTimer, 1000);
    mainpageEl.parentNode.removeChild(mainpageEl);
    loadQuestions();     
    body.appendChild(questionsEl); 
    body.appendChild(resultEl);  
};

var inputText = function(event){
    resultEl.parentNode.removeChild(resultEl); 
};






questionsEl.parentNode.removeChild(questionsEl);
resultEl.parentNode.removeChild(resultEl);
subFormEl.parentNode.removeChild(subFormEl);
startquizEl.addEventListener("click",startQuiz);
option1El.addEventListener("click",buttonclick);
option2El.addEventListener("click",buttonclick);
option3El.addEventListener("click",buttonclick);
option4El.addEventListener("click",buttonclick);
subFormEl.addEventListener("keyup",inputText);