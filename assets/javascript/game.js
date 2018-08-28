
// Questions Object
let questions = [
  {
    id: 0,
    question: 'On what Hawaiian island is the Banzai Pipeline located?',
    choices: ['Hawwaii', 'Oahu', 'California', 'Maui'],
    correct: 'Oahu'
  },
  {
    id: 1,
    question: 'What do you call a surfer that rides with his right foot forward? ',
    choices: ['Goofy', 'Reg', 'Normal', 'None of the Above'],
    correct: 'Goofy'
  },
  {
    id: 2,
    question: ' Of the four main surfboard types, which is traditionally the shortest?',
    choices: ['Thruster', 'Single', 'Fish', 'Quad'],
    correct: 'Fish'
  },
  {
    id: 3,
    question: 'Cloud Nine is a gnarly break, but where is it?',
    choices: ['California', 'Mexico', 'Phillippines', 'Bali'],
    correct: 'Phillippines'
  },
  {
    id: 4,
    question: 'What did Huntington Beach, CA become known as because of its influence on surfing?',
    choices: ['Surf City', ' Surf Captial', 'Surf City California', 'Surf City, USA'],
    correct: 'Surf City, USA'
  },
  {
    id: 5 ,
    question: 'Hook Point is a surf break in which of the following regions?',
    choices: ['Scotland', 'Greenland', 'Namibia', 'Alaska'],
    correct: 'Alaska'
  },
  {
    id: 6,
    question: ' Who invented surfing?',
    choices: ['Fijians', 'Hawaiians', 'Aussies', 'Indonesians'],
    correct: 'Hawaiians'
  },
  {
    id: 7,
    question: 'Where is onshore wind blowing?',
    choices: ['towards the shore', 'away from the shore', 'no wind', 'none of the above'],
    correct: 'towards the shore'
  },
  {
    id: 8,
    question: 'What do surfers call it when they get completely covered up by the breaking curl of the wave?',
    choices: ['Piped', 'Hang Ten', 'Gnarly', 'Tubed'],
    correct: 'Tubed'
  },
  {
    id: 9,
    question: 'Where is the most popular surfing spot in the world?',
    choices: ['California', 'Australia', 'Hawaii', 'Ireland'],
    correct: 'Hawaii'
  }
]

// Creates the HTML for Questions
questions.forEach(question => {
  $('.questions-container').append(`
    <div class="row">
      <h5 class="question">${question.question}</h5>
     <p>
      <label>
        <input class="choice" data-choice="${question.choices[0]}"name="questions-${question.id}" type="radio" />
        <span>${question.choices[0]}</span>
      </label>
    </p>
     <p>
      <label>
        <input class="choice" data-choice="${question.choices[1]}"name="questions-${question.id}" type="radio"/>
        <span>${question.choices[1]}</span>
      </label>
    </p>
     <p>
      <label>
        <input class="choice" data-choice="${question.choices[2]}"name="questions-${question.id}" type="radio"/>
        <span>${question.choices[2]}</span>
      </label>
    </p>
     <p>
      <label>
        <input class="choice" data-choice="${question.choices[3]}"name="questions-${question.id}" type="radio"/>
        <span>${question.choices[3]}</span>
      </label>
    </p>
    </div>
  `)
});

// On Click 
var qchoice0
var qchoice1
var qchoice2
var qchoice3
var qchoice4
var qchoice5
var qchoice6
var qchoice7
var qchoice8
var qchoice9

$(document).on('click','.choice',function(){
  let temp = $(this).attr('name').split('-')
  let qid = temp[1]
  window[`qchoice${qid}`] = $(this).attr('data-choice')
})

$('.finishQuiz').on('click',function(){
    finishGame()
})

// Time 
let time = 120
$('.time').html('02:00')
let gameTimer = setInterval(function () {
  time--
  if (time > 0) {
    $('.time').html(timeConverter(time))
  } else {
    $('.time').html('00:00')
    finishGame()
  }
}, 1000)

// Functions
// Finish Game Function
function finishGame(){
  $('.finishQuiz').css('visibility', 'hidden')
  let  correctCount = 0
  let  wrongCount=0
  let  naCount=0
  for (let i = 0; i < questions.length; i++) {
    if (window[`qchoice${i}`] === questions[i].correct) {
      correctCount++
    } else if (window[`qchoice${i}`] === undefined){
      naCount++
    } else {
      wrongCount++
    }
  }
  $('.questions-container').html(`
    <h4>Correct Answers: ${correctCount}</h4>
    <h4>Incorrect Answers: ${wrongCount}</h4>
    <h4>Not Answered: ${naCount}</h4>
  `)
  clearInterval(gameTimer)
}

// Time Function
function timeConverter(t) {
  //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
