
// Questions Object

let questions = [
  {
    question: 'On what Hawaiian island is the Banzai Pipeline located?',
    choices: ['Hawwaii', 'Oahu', 'California', 'Maui'],
    correct: 'Oahu'
  },
  {
    question: 'What do you call a surfer that rides with his right foot forward? ',
    choices: ['Goofy', 'Reg', 'Normal', 'None of the Above'],
    correct: 'Goofy'
  },
  {
    question: ' Of the four main surfboard types, which is traditionally the shortest?',
    choices: ['Thruster', 'Single', 'Fish', 'Quad'],
    correct: 'Fish'
  },
  {
    question: 'Cloud Nine is a gnarly break, but where is it?',
    choices: ['California', 'Mexico', 'Phillippines', 'Bali'],
    correct: 'Phillippines'
  },
  {
    question: 'What did Huntington Beach, CA become known as because of its influence on surfing?',
    choices: ['Surf City', ' Surf Captial', 'Surf City California', 'Surf City, USA'],
    correct: 'Surf City, USA'
  }
]

// Creates the HTML for Questions
questions.forEach(question => {
  $('.container').append(`
    <div class="row">
      <h5 class="question">${question.question}</h5>
     <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>${question.choices[0]}</span>
      </label>
    </p>
     <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>${question.choices[1]}</span>
      </label>
    </p>
     <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>${question.choices[2]}</span>
      </label>
    </p>
     <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>${question.choices[3]}</span>
      </label>
    </p>
      <p class="answer">${question.correct}</p>
    </div>
  `)
});