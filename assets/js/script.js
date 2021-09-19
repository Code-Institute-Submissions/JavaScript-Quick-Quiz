let start = document.getElementById('start-button');
let next = document.getElementById('nextQuest-button');
let questionsContainer = document.getElementById('question-container');
let quest = document.getElementById('quests');


start.addEventListener('click', startQuiz);
next.addEventListener('click', nextQuestion);

function startQuiz() {
  console.log('logged');

}

function nextQuestion() {
  
}

function showQuest() {

}

function answers() {

}

const quests = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
       {text: '<script>', correct: true},    //Correct answer  
       {text: '<js>', correct: false},
       {text: '<javascript>', correct: false},
       {text:'<scripting>', correct: false}
    ]
  },
 
]