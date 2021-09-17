function runQuiz() {
    let questions = document.getElementById('quest-text');
}

let quest = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
        {option:"<script>"}, // Correct answer
        {option:"<scripting>"},
        {option:"<js>"}
      ]
    },

    {
      question: "Where is the correct place to insert a JavaScript?",
      answers: [
        {option:"The <body> section"},
        {option:"The <head> section"},
        {option:"Both the <head> section and the <body> section are correct"} // Correct answer
      ]
    },

    {
      question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      answers: [
        {option:'<script src="xxx.js">'}, //Correct answer
        {option:'<script name="xxx.js">'},
        {option:'<script href="xxx.js">'}
      ]
    },

    {
      question: 'How do you write "Hello World" in an alert box?',
      answers: [
        {option:'msgBox("Hello World");'},
        {option:'alert("Hello World");'}, // Correct answer
        {option:'msg("Hello World");'},
      ]
    },

    {
      question: "How do you create a function in JavaScript?",
      answers: [
        {option:"function = myFunction()"},
        {option:"function:myFunction()"},
        {option:"function myFunction()"}, //Correct answer
      ]
    },
  ]